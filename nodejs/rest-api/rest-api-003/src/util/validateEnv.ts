import { cleanEnv, str, port } from 'envalid';

function validateEnv(): void {
    cleanEnv(process.env, {
        MONGO_PATH: str(),
        MONGO_USERNAME: str(),
        MONGO_PASSWORD: str(),
        SERVER_PORT: port({ default: 3000 }),
        SERVER_ENV: str({
            choices: ['lcl', 'dev', 'qat', 'stg', 'prd'],
        }),
    });
}

export default validateEnv;
