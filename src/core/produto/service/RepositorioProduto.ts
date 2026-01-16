import Produto from "@produto/model/Produto"

export default interface RepositorioProduto {
    inserir(produto: Produto): Promise<void>
    buscarProdutoPorId(id: string): Promise<Produto | null>
}
