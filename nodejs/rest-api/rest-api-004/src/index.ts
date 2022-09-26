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

log.info('==============================================')
log.debug('Debug message')
log.info('Info message')
log.warn('Warn message')
log.error('Error message')
log.error(new Error('an error'))
// throw new Error('An uncaught error')

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
