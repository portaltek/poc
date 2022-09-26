import { isString } from '@/util/commons/stringUtil'
import { log } from '@/util/log/logConfig'

export function hasMessage(e: any): e is { message: string } {
    return e && typeof e.message == 'string'
}

export function getMessage(error: any | string) {
    if (isString(error)) return error
    return hasMessage(error) ? error.message : 'no error message found'
}

export default class HttpException extends Error {
    public status: number
    public message: string

    constructor(status: number, error: string | any) {
        super(getMessage(error))
        this.status = status
        this.message = getMessage(error)
        log.error(this.message)
    }
}

export class AppError extends Error {
    public message: string
    constructor(error: string | any) {
        super(getMessage(error))
        this.message = getMessage(error)
        log.error(this.message)
    }
}
