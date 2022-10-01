/* hello.ts */
import 'dotenv/config'
const express = require('express')

const PORT = process.env.SERVER_PORT || '8080'
const app = express()

app.get('/', (req: any, res: any) => {
    res.send('Hello, World!!!')
})

app.listen(parseInt(PORT, 10), () => {
    console.log(`Listening for requests on http://localhost:${PORT}`)
})
