import CasoDeUso from "@shared/CasoDeUso"
import Usuario from "@usuario/model/Usuario"
import RepositorioUsuario from "./RepositorioUsuario"
import ProvedorCriptografia from "./ProvedorCriptografia"
import Erros from "@shared/Erros"
import Id from "@shared/Id"

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {
    constructor(
        private repo: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia
    ) {}
    async executar(usuario: Usuario): Promise<void> {
        const senhaCripto = this.provedorCripto.criptografar(usuario.senha)
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
