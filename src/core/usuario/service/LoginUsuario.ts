import CasoDeUso from "@shared/CasoDeUso"
import Usuario from "@usuario/model/Usuario"
import RepositorioUsuario from "./RepositorioUsuario"
import Erros from "@shared/Erros"
import ProvedorCriptografia from "./ProvedorCriptografia"

export type LoginEntrada = { email: string; senha: string }

export default class LoginUsuario implements CasoDeUso<LoginEntrada, Usuario> {
    constructor(
        private repositorio: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia
    ) {}
    async executar(usuario: LoginEntrada): Promise<Usuario> {
        const usuarioExiste = await this.repositorio.buscarPorEmail(usuario.email)

        if (!usuarioExiste) throw new Error(Erros.USUARIO_JA_EXISTE)

        const mesmaSenha = this.provedorCripto.validarSenha(
            usuario.senha,
            String(usuarioExiste.senha)
        )

        if (!mesmaSenha) throw new Error(Erros.SENHA_INVALIDA)

        return { ...usuarioExiste, senha: undefined }
    }
}
