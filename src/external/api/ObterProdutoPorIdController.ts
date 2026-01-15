import { Express } from "express"
import ObterProdutoPorId from "core/produto/service/ObterProdutoPorId"

export default class ObterProdutoPorIdController {
    constructor(servidor: Express, casoDeUso: ObterProdutoPorId) {
        servidor.get("/api/produtos/:id", async (req, res) => {
            try {
                const produto = await casoDeUso.executar((req.params as any).id)

                res.status(200).send(produto)
            } catch (erro: any) {
                res.status(400).send(erro.message)
            }
        })
    }
}
