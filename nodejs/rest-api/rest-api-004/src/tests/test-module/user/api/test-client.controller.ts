import { Router, Request, Response, NextFunction } from 'express'
// Util
import Controller from '@/util/interfaces/controller.interface'
import HttpException from '@/util/exceptions/http.exception'
import TestClientService from '@/tests/test-module/user/core/test-client.serv'
// Resource

export default class TestClientController implements Controller {
    public path = '/test-module/user'
    public router = Router()
    private testClientService = new TestClientService()

    constructor() {
        this.initRoutes()
    }

    private initRoutes(): void {
        this.router.get(`${this.path}`, this.health)
        this.router.get(`${this.path}/start`, this.start)
    }

    private health = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        res.status(200).json('test-api:ALIVE')
    }

    private start = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const result = await this.testClientService.start()

            res.status(200).json({
                uri: 'test-api/init/start',
                status: 'OK',
                result: result,
            })
        } catch (error) {
            next(new HttpException(400, error))
        }
    }
}
