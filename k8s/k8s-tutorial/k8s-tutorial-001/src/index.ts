import 'dotenv/config'
const express = require('express')

const PORT = process.env.SERVER_PORT || '3000'
const app = express()

app.get('/', (req: any, res: any) => {
    res.send('Hello World!!!')
})

app.listen(parseInt(PORT, 10), () => {
    console.log(`ENV:${process.env.ENV}`)
    console.log(`MY_ENV_VAR:${process.env.MY_ENV_VAR}`)
    console.log(`MY_SECRET:${process.env.MY_SECRET}`)
    console.log(`Listening on http://localhost:${PORT}`)
})
