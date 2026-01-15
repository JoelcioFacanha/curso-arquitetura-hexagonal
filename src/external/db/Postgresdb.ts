import pgPromise from "pg-promise"
import dotenv from "dotenv"

dotenv.config()
/*
console.log(`db_host: ${process.env.DB_HOST}`)
console.log(`db_host: ${process.env.DB_PORT}`)
console.log(`db_host: ${process.env.DB_DATABASE}`)
console.log(`db_host: ${process.env.DB_USER}`)
console.log(`db_host: ${process.env.DB_PASSWORD}`)
*/
const pgp = pgPromise()
const db = pgp({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: String(process.env.DB_PASSWORD),
})

export default db
