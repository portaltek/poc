import 'dotenv/config'
const express = require('express')
const dotenv = require('dotenv')

dotenv.config({
  path: `./config/${process.env.ENV}/.env`,
})
dotenv.config({
  path: `./config/${process.env.ENV}/.secrets`,
})

const {ENV, SERVER_PORT, MY_ENV_VAR, MY_SECRET} = process.env
const PORT = SERVER_PORT || '3000'
const app = express()

const msg = [
  `ENV:${ENV}`,
  `MY_ENV_VAR:${MY_ENV_VAR}`,
  `MY_SECRET:${MY_SECRET}`,
  `Listening on http://localhost:${PORT}`,
]

app.get('/', (_req: any, res: any) => {
  res.json(msg)
})

app.listen(parseInt(PORT, 10), () => {
  console.log(msg)
})
