import CasoDeUso from "@shared/CasoDeUso"
import RepositorioProduto from "./RepositorioProduto"
import Produto from "@produto/model/Produto"
import Id from "@shared/Id"

export type ProdutoEntrada = { nome: string; preco: number }

export default class RegistrarProduto implements CasoDeUso<ProdutoEntrada, void> {
    constructor(private repo: RepositorioProduto) {}
    async executar(produtoEntrada: ProdutoEntrada): Promise<void> {
        const novoProduto: Produto = {
            id: Id.gerarHash(),
            nome: produtoEntrada.nome,
            preco: produtoEntrada.preco,
        }

        this.repo.inserir(novoProduto)
    }
}
