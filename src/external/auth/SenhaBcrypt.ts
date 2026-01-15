import ProvedorCriptografia from "@usuario/service/ProvedorCriptografia"
import bcrypt from "bcrypt"

export default class SenhaCrypto implements ProvedorCriptografia {
    validarSenha(senha: string, senhaCriptografada: string): boolean {
        return bcrypt.compareSync(senha, senhaCriptografada)
    }

    criptografar(texto: string): string {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(texto, salt)
    }
}
