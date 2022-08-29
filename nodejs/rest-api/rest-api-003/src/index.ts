import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/util/validateEnv';
import App from './app';
import PostController from '@/resources/post/post.controller';
// import UserController from 'resources/user/user.controller';

validateEnv();

const app = new App(
    // [new PostController(), new UserController()],
    [new PostController()],
    Number(process.env.SERVER_PORT)
);

app.listen();
