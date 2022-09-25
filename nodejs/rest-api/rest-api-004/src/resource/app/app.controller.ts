import { Router, Request, Response, NextFunction } from 'express'
// Util
import HttpException, { getMessage } from '@/util/exceptions/http.exception'
import Controller from '@/util/interfaces/controller.interface'
// Resource

export default class AppController implements Controller {
    public path = '/app'
    public router = Router()

    constructor() {
        this.initRoutes()
    }

    private initRoutes(): void {
        this.router.get(`${this.path}/health`, this.health)
    }

    private health = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            res.status(200).json('ALIVE')
        } catch (error) {
            next(new HttpException(400, getMessage(error)))
        }
    }
}
