import { Express } from "express"
import RegistrarProduto from "@produto/service/RegistrarProduto"

export default class ObterProdutoPorIdController {
    constructor(servidor: Express, casoDeUso: RegistrarProduto) {
        servidor.post("/api/produtos/registrar", async (req, res) => {
            try {
                await casoDeUso.executar({
                    nome: req.body.nome,
                    preco: Number(req.body.preco),
                })

                res.status(201).send()
            } catch (erro: any) {
                res.status(400).send(erro.message)
            }
        })
    }
}
