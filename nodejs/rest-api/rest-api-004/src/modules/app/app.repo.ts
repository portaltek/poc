import mongoose from 'mongoose'
// Util
import { ENV } from '@/util/env/envUtil'
import { log } from '@/util/log/logConfig'

const {
    MONGO_DB_NAME,
    MONGO_DB_PORT,
    MONGO_DB_PATH,
    MONGO_DB_USER,
    MONGO_DB_PASS,
    MONGO_EXPRESS_PORT,
    MONGO_EXPRESS_URI_BASE,
} = ENV

const MONGO_PATH = `${MONGO_DB_PATH}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`
const MONGO_EXPRESS_URL = `localhost:${MONGO_EXPRESS_PORT}/${MONGO_EXPRESS_URI_BASE}`

export function initMongoRepo() {
    mongoose
        .connect(`mongodb://${MONGO_DB_USER}:${MONGO_DB_PASS}@${MONGO_PATH}`)
        .then(() => log.info(`MongoDB Connected: ${MONGO_PATH}`))
        .then(() => log.info(`Mongo Express url: ${MONGO_EXPRESS_URL}`))
}

export function initNoRepo() {
    // log.info('initNoRepo')
}
