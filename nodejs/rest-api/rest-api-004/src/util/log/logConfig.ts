import morgan from 'morgan'
import { logWithWinston } from './logWithWinston'
import { Logger } from 'tslog'

export const logBkup = logWithWinston
export const log: Logger = new Logger()

export const restLog = morgan(
    ':status|:method :url|:res[content-length]|:response-time',
    {
        stream: {
            write: (msg) => log.info(msg.trim()),
        },
    }
)
