import { Request, Response, NextFunction } from 'express';
import HttpException from '@/util/exceptions/http.exception';

function ErrorMiddleware(
    error: HttpException,
    _req: Request,
    res: Response,
    _next: NextFunction
): void {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    res.status(status).send({
        status,
        message,
    });
}

export default ErrorMiddleware;
