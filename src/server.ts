import express from 'express'

import './database'
import { routes } from './routes'

const app = express()

app.use(express.json())

app.use(routes)

app.listen(4004, () => {
    console.log('Servidor online na porta 4004')
})
