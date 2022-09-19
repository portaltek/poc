import 'dotenv/config'
import 'module-alias/register'
import validateEnv from '@/util/env/validateEnv'
import UserController from '@/resource/user/api/user.controller'
import AppController from '@/app/app.controller'
import App from '@/app//app'

validateEnv()

const controllers = [new AppController(), new UserController()]

const app = new App(controllers, Number(process.env.SERVER_PORT))

app.listen()

export default app
