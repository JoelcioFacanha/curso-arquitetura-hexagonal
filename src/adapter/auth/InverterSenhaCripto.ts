import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografia"

// Na arquitetura hexagonal esta classe é um adaptador
// O adaptador não faz parte do core
export default class InverterSenhaCripto implements ProvedorCriptografia {
    criptografar(senha: string): string {
        return senha.split("").reverse().join("")
    }
}
