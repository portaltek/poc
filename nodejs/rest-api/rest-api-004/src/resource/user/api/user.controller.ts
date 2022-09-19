import { Router, Request, Response, NextFunction } from 'express'
// Util
import HttpException, { getMessage } from '@/util/exceptions/http.exception'
import Controller from '@/util/interfaces/controller.interface'
import validationMiddleware from '@/util/middleware/validation.middleware'
// Resource
import validate from '@/resource/user/api/user.validation'
import UserService from '@/resource/user/core/user.serv'
import authService from '@/resource/user/core/auth.serv'

export default class UserController implements Controller {
    public path = '/user'
    public router = Router()
    private UserService = new UserService()

    constructor() {
        this.initRoutes()
    }

    private initRoutes(): void {
        this.router.post(
            `${this.path}/register`,
            validationMiddleware(validate.register),
            this.register
        )
        this.router.post(
            `${this.path}/login`,
            validationMiddleware(validate.login),
            this.login
        )
        this.router.get(`${this.path}`, authService, this.getUser)
        this.router.get(`${this.path}/findAll`, authService, this.getUserList)
    }

    private register = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { name, email, password } = req.body

            const token = await this.UserService.register(
                name,
                email,
                password,
                'user'
            )

            res.status(201).json({ token })
        } catch (error) {
            next(new HttpException(400, getMessage(error)))
        }
    }

    private login = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { email, password } = req.body

            const token = await this.UserService.login(email, password)

            res.status(200).json({ token })
        } catch (error) {
            next(new HttpException(400, getMessage(error)))
        }
    }

    private getUser = (
        req: Request,
        res: Response,
        next: NextFunction
    ): Response | void => {
        const { user } = req.body
        if (!user) {
            return next(new HttpException(404, 'No logged in user'))
        }

        res.status(200).send({ data: user })
    }

    private getUserList = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        const users = await this.UserService.findAll()
        res.status(200).json({ data: users })
    }
}
