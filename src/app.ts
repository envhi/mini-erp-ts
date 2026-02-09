import 'dotenv/config'
import { pool } from './db/pool'

import express from 'express'

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    const query = `SELECT * FROM users`

    const users = await pool.query(query)

    res.json(users.rows)
})

export default app