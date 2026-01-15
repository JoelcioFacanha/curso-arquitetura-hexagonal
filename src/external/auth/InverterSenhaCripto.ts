import ProvedorCriptografia from "@usuario/service/ProvedorCriptografia"
// Na arquitetura hexagonal esta classe é um adaptador
// O adaptador não faz parte do core
export default class InverterSenhaCripto implements ProvedorCriptografia {
    validarSenha(senha: string, senhaCriptografada: string): boolean {
        return this.criptografar(senha) === senhaCriptografada
    }

    criptografar(senha: string): string {
        return senha.split("").reverse().join("")
    }
}
