import { Logger, ILogObject, TLogLevelName } from 'tslog'
import { ENV } from '@/util/env/envUtil'
import * as fs from 'fs'

export const logWithTsLog: Logger = new Logger({
    minLevel: ENV.LOG_LEVEL as TLogLevelName,
})

function logToTransport(logObject: ILogObject) {
    fs.appendFileSync(
        `${ENV.LOG_FOLDER}/ts-log.txt`,
        JSON.stringify(logObject) + '\n'
    )
}

logWithTsLog.attachTransport(
    {
        silly: logToTransport,
        debug: logToTransport,
        trace: logToTransport,
        info: logToTransport,
        warn: logToTransport,
        error: logToTransport,
        fatal: logToTransport,
    },
    ENV.LOG_LEVEL as TLogLevelName
)
