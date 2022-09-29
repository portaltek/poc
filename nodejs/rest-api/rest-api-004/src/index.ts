import 'module-alias/register'
import { Server } from 'http'
// Util
import { validateEnv, ENV } from '@/util/env/envUtil'
import { isNot } from '@/util/commons/stringUtil'
// Resource
import UserController from '@/modules/user/api/user.controller'
import AppController from '@/modules/app/app.controller'
import App, { initNoRepo, initMongoRepo } from '@/modules/app/app'
import TestClientController from '@/tests/test-module/user/api/test-client.controller'
import { log } from '@/util/log/logConfig'
import { AppError } from '@/util/exceptions/http.exception'

log.info('==============================================')
log.debug('I am a debug log.')
log.info('I am an info log.')
log.warn('I am a warn log with a json object:')
log.error('I am a simple error log.')

try {
    throw new Error('Error at new AppError(Error message ) ')
} catch (error) {
    const e = new AppError(error)
}

validateEnv()
export const appServer = startAppServer()
export const appClient = startAppClient()

function startAppServer(): Server | undefined {
    const controllers = [new AppController(), new UserController()]
    const appServer = new App(
        'MyAppServer',
        controllers,
        ENV.SERVER_URI_BASE as string,
        Number(ENV.SERVER_PORT),
        initMongoRepo
    )
    return appServer.listen()
}

function startAppClient(): Server | undefined {
    if (isNot(ENV.TEST_CLIENT_ENABLE)) return

    const appClient = new App(
        'MyAppClient',
        [new TestClientController()],
        ENV.TEST_CLIENT_URI_BASE as string,
        Number(ENV.TEST_CLIENT_PORT),
        initNoRepo
    )
    return appClient.listen()
}
