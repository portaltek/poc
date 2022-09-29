import { v4 as uuidv4 } from 'uuid'
import { Request, Response, NextFunction } from 'express'
import { ENV } from '@/util/env/envUtil'

export const TID = ENV.LOG_REQ_TRACE_ID as string
export const SIZE = parseInt(ENV.LOG_REQ_TRACE_ID_SIZE as string)

export function createTraceID(req: Request, res: Response, next: NextFunction) {
    if (req.headers[TID] == undefined) req.headers[TID] = createID()
    next()
}

function createID() {
    return uuidv4()
        .replace(/-/g, '')
        .slice(SIZE * -1)
}
