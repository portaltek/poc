import morgan from 'morgan'
import { logWithWinston } from './logWithWinston'
import { logWithTsLog } from './logWithTsLog'
import { Request, Response } from 'express'
import { TID } from './traceID'

export const logBkup = logWithTsLog

export const log = logWithWinston

morgan.token('trace-id', function (req: Request, res: Response) {
    return req.headers[TID] as string
})

export const restLog = morgan(
    '|TID::trace-id|:status|:method :url|:res[content-length]|:response-time',
    {
        stream: {
            write: (msg) => log.info(msg.trim()),
        },
    }
)
