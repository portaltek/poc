import morgan from 'morgan'
import { logWithWinston } from './logWithWinston'
import { logWithTsLog } from './logWithTsLog'

export const logBkup = logWithWinston

export const log = logWithTsLog

export const restLog = morgan(
    ':status|:method :url|:res[content-length]|:response-time',
    {
        stream: {
            write: (msg) => log.info(msg.trim()),
        },
    }
)
