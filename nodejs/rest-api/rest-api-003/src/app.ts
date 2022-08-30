import express, { Application } from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import Controller from '@/util/interfaces/controller.interface';
import ErrorMiddleware from '@/middleware/error.middleware';

class App {
    public express: Application;
    public port: number;
    constructor(controllers: Controller[], port: number) {
        this.express = express();
        this.port = port;
        this.initRepoConnection();
        this.initMiddleware();
        this.initControllers(controllers);
        this.initErrorHandling();
    }
    private initRepoConnection() {
        const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_PATH } = process.env;
        mongoose.connect(
            `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_PATH}`
        );
    }
    private initMiddleware() {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
    }
    private initControllers(controllers: Controller[]) {
        controllers.forEach((controller: Controller) => {
            this.express.use('/api', controller.router);
        });
    }
    private initErrorHandling() {
        this.express.use(ErrorMiddleware);
    }
    public listen() {
        this.express.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`);
        });
    }
}

export default App;
