import { pool } from "../../db/pool"

export async function createUser({name, email, password, role}: any) {
    const query = `
            INSERT INTO users (name, email, password_hash, role)
            VALUES ($1, $2, $3, $4)
            RETURNING name, email, role
        `
    
    const user = await pool.query(query, [name, email, password, role])

    return user.rows[0]
}