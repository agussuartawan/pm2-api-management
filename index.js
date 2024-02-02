import express from "express"
import route from "./route/route.js";
import {botInit} from "./bot/tele-bot.js";

const app = express()
const port = 8071

app.use(express.json())
app.use(route)
app.use(botInit)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
