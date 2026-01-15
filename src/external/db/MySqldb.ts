import mysql from "mysql2/promise"

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: String(process.env.DB_PASSWORD),
    database: process.env.DB_DATABASE,
    ssl: {
        rejectUnauthorized: true,
    },
})

export default pool
