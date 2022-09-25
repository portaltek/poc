import 'dotenv/config'
import { cleanEnv, str, bool, port } from 'envalid'

export function validateEnv(): void {
    cleanEnv(process.env, {
        MONGO_PATH: str(),
        MONGO_USERNAME: str(),
        MONGO_PASSWORD: str(),
        SERVER_PORT: port({ default: 3000 }),
        SERVER_ENV: str({
            choices: ['mem', 'lol', 'dev', 'qat', 'stg', 'prd'],
        }),
        TEST_CLIENT_ENABLE: bool({ default: false }),
        TEST_CLIENT_PORT: port({ default: 3001 }),
    })
}

// Shortcut for process.env
export const ENV = {
    ...process.env,
}
