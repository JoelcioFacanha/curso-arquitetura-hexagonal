import LoginUsuarioController from "@external/api/LoginUsuarioController"
import ObterProdutoPorIdController from "@external/api/ObterProdutoPorIdController"
import RegistrarUsuarioController from "@external/api/RegistrarUsuarioController"
import SenhaCrypto from "@external/auth/SenhaBcrypt"
import RepositorioUsuarioPg from "@external/db/RepositorioUsuarioPg"
import LoginUsuario from "@usuario/service/LoginUsuario"
import RegistrarUsuario from "@usuario/service/RegistrarUsuario"
import ObterProdutoPorId from "core/produto/service/ObterProdutoPorId"
import dotenv from "dotenv"
import express from "express"

dotenv.config()

const app = express()
const port = process.env.API_PORT ?? 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`🔥 Servidor executando na porta ${port}`)
})

//-------------------------------------------- Rota abertas
const repositorioUsuario = new RepositorioUsuarioPg()
const provedorCripto = new SenhaCrypto()

const registrarUsuario = new RegistrarUsuario(repositorioUsuario, provedorCripto)
const loginUsuario = new LoginUsuario(repositorioUsuario, provedorCripto)
const produtoPorId = new ObterProdutoPorId()

new RegistrarUsuarioController(app, registrarUsuario)
new LoginUsuarioController(app, loginUsuario)
new ObterProdutoPorIdController(app, produtoPorId)
