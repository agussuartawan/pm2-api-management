import express from "express";
import pm2list from "../controller/pm2-control.js";
import deploySipwanDashboard from "../controller/deploy-control.js";

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello world")
})

router.get("/pm2/list", pm2list)
router.get("/pm2/deploy/sipwan-dashboard", deploySipwanDashboard)

export default router

