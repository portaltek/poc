import { Server } from 'http'
import express, { Application, Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
// Util
import { ENV } from '@/util/env/envUtil'
import { log, restLog } from '@/util/log/logConfig'
import Controller from '@/util/interfaces/controller.interface'
import ErrorMiddleware from '@/util/middleware/error.middleware'
import { createTraceID } from '@/util/log/traceID'

export function initMongoRepo() {
    const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_PATH } = ENV
    mongoose
        .connect(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_PATH}`)
        .then(() => log.info(`MongoDB Connected: ${MONGO_PATH}`))
}

export function initNoRepo() {
    // log.info('initNoRepo')
}

export default class App {
    public express: Application
    public port: number
    public appname: string
    public urlBase: string = ''
    constructor(
        appname: string,
        controllers: Controller[],
        urlBase: string,
        port: number,
        initRepo: Function
    ) {
        this.appname = appname
        this.express = express()
        this.urlBase = urlBase
        this.port = port
        initRepo()
        this.initMiddleware()
        this.initControllers(controllers)
        this.initErrorHandling()
    }

    private initMiddleware() {
        this.express.use(helmet())
        this.express.use(cors())
        this.express.use(createTraceID)
        this.express.use(restLog)
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: false }))
        this.express.use(compression())
    }
    private initControllers(controllers: Controller[]) {
        controllers.forEach((controller: Controller) => {
            this.express.use(this.urlBase, controller.router)
        })
    }
    private initErrorHandling() {
        this.express.use(ErrorMiddleware)
    }
    public listen(): Server {
        return this.express.listen(this.port, () => {
            log.info(
                `${this.appname}:${this.port}${this.urlBase} started with ENV:${ENV.SERVER_ENV}`
            )
        })
    }
}
