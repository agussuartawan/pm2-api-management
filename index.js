import express from "express"
import route from "./route/route.js";

const app = express()
const port = 8071

app.use(express.json())
app.use(route)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
