import * as winston from 'winston'
import 'winston-daily-rotate-file'
import { ENV } from '@/util/env/envUtil'

const {
    combine,
    timestamp,
    json,
    cli,
    printf,
    colorize,
    align,
    errors,
    splat,
    label,
} = winston.format
const { Console, File, DailyRotateFile } = winston.transports

const LOG_DATE_FORMAT = {
    format: ENV.LOG_DATETIME_FORMAT,
}
const LOG_MSG_FORMAT = (i: any) => `${i.timestamp}|${i.level}|${i.message}`

const logConsole = () => {
    return new Console({
        format: combine(
            colorize({ all: true }),
            align(),
            printf(LOG_MSG_FORMAT)
        ),
    })
}

const logFileDailyRotation = (file: string) => {
    const transport = new DailyRotateFile({
        level: 'info',
        filename: `${ENV.LOG_FOLDER}/${file}`,
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '10m',
        maxFiles: '1d',
        format: combine(printf(LOG_MSG_FORMAT)),
    })
    transport.on('rotate', function (oldFilename: string, newFilename: string) {
        // do something fun
    })
    return transport
}

const logFile = (file: string) => {
    return new File({
        filename: `${ENV.LOG_FOLDER}/${file}`,
        format: combine(printf(LOG_MSG_FORMAT)),
    })
}

const logJsonFile = (file: string) => {
    return new File({
        filename: `${ENV.LOG_FOLDER}/${file}`,
        format: combine(errors({ stack: true }), timestamp(), json()),
    })
}

export const logWithWinston = winston.createLogger({
    level: ENV.LOG_LEVEL,
    format: combine(timestamp(LOG_DATE_FORMAT)),
    transports: [
        logConsole(),
        logJsonFile('app.json'),
        logFile('app.log'),
        logFileDailyRotation('app-%DATE%.log'),
    ],
    // exceptionHandlers: [logFile('exception.log')],
    // rejectionHandlers: [logFile('rejections.log')],
})
