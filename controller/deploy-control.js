import { exec } from "child_process"


function deploySipwanDashboard(req, res) {
    let folderName = req.query.folderName
    let branchName = req.query.branchName

    if (!folderName) {
       folderName = "sipwan-dashboard"
    }
    if (!branchName) {
        branchName = "main"
    }

    const dir = `cd /home/admin/ui/${folderName}/staging`
    const updateRepo = `git pull origin ${branchName}`
    const pm2run = `mvn install -Pproduction && pm2 delete ${folderName}; pm2 start --name ${folderName} java -- -jar -Dspring.profiles.active=staging "./target/sipwan-payment-dashboard-1.0-SNAPSHOT.jar"`
    const script = `${dir} && ${updateRepo} && ${pm2run}`

    exec(script, (err, stdout, stderr) => {
        if (err) {
            res.status(500).json({
                status: "error",
                message: "Internal server error",
                detail: err.message
            })
            return
        }

        res.status(200).json({
            status: "success",
            message: "Start sipwan-dashboard success",
            detail: stdout,
            scriptOutput: stderr
        })

    })
    console.log("[DEPLOY] Script to deploy sipwan-dashboard running...")
}

export default deploySipwanDashboard
