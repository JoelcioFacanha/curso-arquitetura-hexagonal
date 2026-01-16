import Produto from "@produto/model/Produto"
import CasoDeUso from "@shared/CasoDeUso"
import RepositorioProduto from "./RepositorioProduto"
import Erros from "@shared/Erros"

export default class ObterProdutoPorId implements CasoDeUso<string, Produto> {
    constructor(private repo: RepositorioProduto) {}
    async executar(id: string): Promise<Produto> {
        const produtoExiste = await this.repo.buscarProdutoPorId(id)

        if (!produtoExiste) throw Error(Erros.PRODUTO_JA_EXISTE)

        const produto = {
            id: produtoExiste.id,
            nome: produtoExiste.nome,
            preco: produtoExiste.preco,
        }

        return produto
    }
}
