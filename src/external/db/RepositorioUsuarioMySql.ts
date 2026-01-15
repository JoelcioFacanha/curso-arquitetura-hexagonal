import Usuario from "@usuario/model/Usuario"
import RepositorioUsuario from "@usuario/service/RepositorioUsuario"
import pool from "./MySqldb"
import { RowDataPacket } from "mysql2"

export default class RepositorioUsuarioMySql implements RepositorioUsuario {
    async inserir(usuario: Usuario): Promise<void> {
        await pool.query("INSERT INTO usuarios (id, nome, email, senha) VALUES (?, ?, ?, ?)", [
            usuario.id,
            usuario.nome,
            usuario.email,
            usuario.senha,
        ])
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        try {
            const [rows] = await pool.query<RowDataPacket[]>(
                `SELECT * FROM usuarios WHERE email = ?`,
                [email]
            )

            const usuarios = rows as Usuario[]

            if (usuarios.length === 0) return null

            return usuarios[0] // retorna o primeiro usuário encontrado
        } catch (error) {
            if (error instanceof Error) {
                console.error("Erro ao buscar usuário:", error)
            }

            return null
        }
    }
}
