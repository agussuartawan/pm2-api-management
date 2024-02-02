import express from "express";
import pm2list from "../pm2-control.js";

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello world")
})

router.get("/pm2/list", pm2list)

export default router

