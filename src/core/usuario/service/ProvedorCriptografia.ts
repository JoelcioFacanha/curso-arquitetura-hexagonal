// Na arquitetura hexagonal esta interface é uma porta
// a porta faz parte do core da sua aplicação
export default interface ProvedorCriptografia {
    criptografar(texto: string): string
}
