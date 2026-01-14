import RepositorioUsuario from "@usuario/service/RepositorioUsuario"
import db from "./db"
import Usuario from "@usuario/model/Usuario"

export default class RepositorioUsuarioPg implements RepositorioUsuario {
    async inserir(usuario: Usuario) {
        db.query(
            `insert into usuarios (id, nome, email, senha)
            values ($1, $2, $3, $4)`,
            [usuario.id, usuario.nome, usuario.email, usuario.senha]
        )
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        return await db.oneOrNone(
            `
            select * from usuarios where email = $1`,
            [email]
        )
    }
}
