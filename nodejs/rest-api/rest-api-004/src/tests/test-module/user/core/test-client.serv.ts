// Util
import { ENV } from '@/util/env/envUtil'
import { rest } from '@/util/rest-client/custom-rest-client'
// Resource

const urlBase = `http://localhost:${ENV.SERVER_PORT}`
const user = {
    name: 'sample username',
    email: `${ENV.TEST_USER_EMAIL}`,
    password: `${ENV.TEST_USER_PASSWORD}`,
}

export default class TestClientService {
    public async start(): Promise<any> {
        const jwt = await this.login(user)
        const result = await this.findAllUsers(jwt)
        return result
    }

    public async login(user: any): Promise<string> {
        const restClient = rest(urlBase)
        const res = await restClient.post(`/api/user/login`, user)
        const { token } = res.data
        return token
    }

    public async findAllUsers(jwt: string): Promise<any> {
        const restClient = rest(urlBase, jwt)
        const res = await restClient.get(`/api/user/findAll`)
        return res.data
    }
}
