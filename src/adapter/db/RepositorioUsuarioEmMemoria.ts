import Usuario from "@usuario/model/Usuario"
import RepositorioUsuario from "@usuario/service/RepositorioUsuario"

export default class RepositorioUsuarioEmMemoria implements RepositorioUsuario {
    private static readonly items: Usuario[] = []

    async inserir(usuario: Usuario) {
        const itens = RepositorioUsuarioEmMemoria.items
        const existeUsuario = await this.buscarPorEmail(usuario.email)

        if (existeUsuario) return

        itens.push(usuario)
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        const itens = RepositorioUsuarioEmMemoria.items
        return itens.find((u) => u.email === email) ?? null
    }
}
