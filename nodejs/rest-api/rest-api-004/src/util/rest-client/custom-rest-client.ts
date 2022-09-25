import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'

export function rest(urlBase: string, jwt?: string): AxiosInstance {
    const restClient: AxiosInstance = axios.create({
        baseURL: `${urlBase}`,
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    })

    return restClient
}

export function logRequest(restClient: AxiosInstance, fn?: Function): void {
    if (fn !== undefined) {
        restClient.interceptors.request.use(fn())
        return
    }

    restClient.interceptors.request.use((req) => {
        console.log(`Request:`, JSON.stringify(req, null, 2))
        return req
    })
}

export function logResponse(restClient: AxiosInstance, fn?: Function) {
    if (fn !== undefined) {
        restClient.interceptors.response.use(fn())
        return
    }

    restClient.interceptors.response.use((res) => {
        console.log(`Response:`, JSON.stringify(res, null, 2))
        return res
    })
}

export function config(jwt: string): AxiosRequestConfig {
    return {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    }
}
