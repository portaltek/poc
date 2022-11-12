import 'dotenv/config'
const express = require('express')
const dotenv = require('dotenv')
dotenv.config({
    path: `./setup/config/${process.env.ENV}/.env`,
})
dotenv.config({
    path: `./setup/config/${process.env.ENV}/.secrets`,
})
const PORT = process.env.SERVER_PORT || '3000'
const app = express()

const msg = [
    `ENV:${process.env.ENV}`,
    `MY_ENV_VAR:${process.env.MY_ENV_VAR}`,
    `MY_SECRET:${process.env.MY_SECRET}`,
    `Listening on http://localhost:${PORT}`,
]

app.get('/', (_req: any, res: any) => {
    res.json(msg)
})

app.listen(parseInt(PORT, 10), () => {
    console.log(msg)
})
