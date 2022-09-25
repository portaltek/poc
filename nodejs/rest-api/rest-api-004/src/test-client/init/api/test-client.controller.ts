import { Router, Request, Response, NextFunction } from 'express'
// Util
import Controller from '@/util/interfaces/controller.interface'
// Resource
import TestClientService from '@/test-client/init/core/test-client.serv'

export default class TestClientController implements Controller {
    public path = '/test-client/init'
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
        res.status(200).json('test-api')
    }

    private start = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        this.testClientService.start()
        res.status(200).json('test-api-init')
    }
}
