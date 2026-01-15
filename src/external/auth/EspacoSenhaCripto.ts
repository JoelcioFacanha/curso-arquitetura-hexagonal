import ProvedorCriptografia from "@usuario/service/ProvedorCriptografia"

export default class EspacoSenhaCripto implements ProvedorCriptografia {
    validarSenha(senha: string, senhaCriptografada: string): boolean {
        return this.criptografar(senha) === senhaCriptografada
    }

    criptografar(texto: string): string {
        return texto.split("").join(" ")
    }
}
