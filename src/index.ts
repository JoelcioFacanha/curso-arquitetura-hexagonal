import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Bem-vindo ao curso de nodejs! - tsc-watch")
})

app.listen(3000, () => {
    console.log("servidor ativo porta: 3000")
})
