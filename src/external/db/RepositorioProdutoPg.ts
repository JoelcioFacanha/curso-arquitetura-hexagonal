import Produto from "@produto/model/Produto"
import RepositorioProduto from "@produto/service/RepositorioProduto"
import db from "./Postgresdb"

export default class RepositorioProdutoPg implements RepositorioProduto {
    async inserir(produto: Produto): Promise<void> {
        db.query(
            `insert into produtos (id, nome, preco)
            values ($1, $2, $3)`,
            [produto.id, produto.nome, produto.preco]
        )
    }

    async buscarProdutoPorId(id: string): Promise<Produto | null> {
        try {
            return await db.oneOrNone(
                `
            select * from produtos where id = $1`,
                [id]
            )
        } catch (error) {
            console.log(error)
        }

        return null
    }
}
