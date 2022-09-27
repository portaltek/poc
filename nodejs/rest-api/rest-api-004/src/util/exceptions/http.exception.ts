import { isString } from '@/util/commons/stringUtil'
import { log } from '@/util/log/logConfig'

export function hasMessage(e: any): boolean {
    return e && typeof e.message == 'string'
}

export function getMessage(error: any | string) {
    if (isString(error)) return error
    return hasMessage(error) ? error.message : 'no error message found'
}

export function isError(e: any): boolean {
    return e instanceof Error
}

export function logErrorStack(error: any) {
    if (!isError(error)) return
    const e = error as Error
    log.trace(`STACK: ${e.stack}`)
}

export class AppError extends Error {
    constructor(error: string | any) {
        super(getMessage(error))
        log.trace(`MSG: ${this.message}`)
        logErrorStack(error)
    }
}
export default class HttpException extends AppError {
    public status: number

    constructor(status: number, error: string | any) {
        super(error)
        this.status = status
    }
}
