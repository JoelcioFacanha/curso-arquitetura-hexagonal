import { Request, Response, NextFunction } from "express"
import ProvedorJwt from "../ProvedorJwt"
import Usuario from "@usuario/model/Usuario"
import RepositorioUsuarioPg from "@external/db/RepositorioUsuarioPg"

export default function UsuarioMiddleware(repo: RepositorioUsuarioPg) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const acessoNegado = () => res.status(403).send("Token inválido")

        const token = req.headers.authorization?.replace("Bearer ", "")

        if (!token) {
            acessoNegado()
            return
        }

        const provedorJwt = new ProvedorJwt(String(process.env.JWT_SECRET))
        const usuarioToken = provedorJwt.obter(token) as Usuario

        const usuario = repo.buscarPorEmail(usuarioToken.email)

        if (!usuario) {
            acessoNegado()
            return
        }

        ;(res as any).usuario = usuario

        next()
    }
}
