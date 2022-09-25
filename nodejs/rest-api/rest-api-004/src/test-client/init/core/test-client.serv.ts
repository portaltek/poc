// Util
import { ENV } from '@/util/env/envUtil'
import { AppError } from '@/util/exceptions/http.exception'
import { rest } from '@/util/rest-client/custom-rest-client'

// Resource

const urlBase = `http://localhost:${ENV.SERVER_PORT}`
const user = {
    name: 'sample username',
    email: `${ENV.TEST_USER_EMAIL}`,
    password: `${ENV.TEST_USER_PASSWORD}`,
}
export default class TestClientService {
    public async start(): Promise<any | AppError> {
        try {
            const jwt = await this.doLogin(user)
            const result = await this.findAllUsers(jwt as string)
            return result
        } catch (error) {
            throw new AppError(error)
        }
    }

    public async doLogin(user: any): Promise<string | AppError> {
        try {
            const restClient = rest(urlBase)
            const res = await restClient.post(`/api/user/login`, user)
            const { token } = res.data
            return token
        } catch (error) {
            throw new AppError(error)
        }
    }

    public async findAllUsers(jwt: string): Promise<any | AppError> {
        try {
            const restClient = rest(urlBase, jwt)
            const res = await restClient.get(`/api/user/findAll`)
            return res.data
        } catch (error) {
            throw new AppError(error)
        }
    }
}
