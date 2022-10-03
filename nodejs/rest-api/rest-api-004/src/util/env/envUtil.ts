import 'dotenv/config'
import { cleanEnv, str, bool, port, num } from 'envalid'

export function validateEnv(): void {
    cleanEnv(process.env, {
        SERVER_PORT: port({ default: 3000 }),
        SERVER_ENV: str({
            choices: ['mem', 'lol', 'dev', 'qat', 'stg', 'prd'],
        }),
        MONGO_DB_USER: str(),
        MONGO_DB_PASS: str(),

        LOG_REQ_TRACE_ID: str({ default: 'my-app-trace-id' }),
        LOG_REQ_TRACE_ID_SIZE: num({ default: 16 }),

        TEST_CLIENT_ENABLE: bool({ default: false }),
        TEST_CLIENT_PORT: port({ default: 3001 }),
    })
}

// Shortcut for process.env
export const ENV = {
    ...process.env,
}
