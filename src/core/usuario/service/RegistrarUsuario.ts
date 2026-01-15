import CasoDeUso from "@shared/CasoDeUso"
import Id from "@shared/Id"
import Usuario from "@usuario/model/Usuario"
import ProvedorCriptografia from "./ProvedorCriptografia"
import RepositorioUsuario from "./RepositorioUsuario"
import Erros from "@shared/Erros"

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {
    constructor(
        private repo: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia
    ) {}
    async executar(usuario: Usuario): Promise<void> {
        const senhaCripto = this.provedorCripto.criptografar(String(usuario.senha))
        const usuarioExiste = await this.repo.buscarPorEmail(usuario.email)

        if (usuarioExiste) throw new Error(Erros.USUARIO_JA_EXISTE)

        const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCripto,
        }

        this.repo.inserir(novoUsuario)
    }
}
