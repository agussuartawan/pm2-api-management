import pm2 from "pm2"


function pm2list(req, res) {
    const processList = []
    pm2.list((err, list) => {
        if (list.length === 0) {
            console.log("[PM2 LIST] Process not found")
        }

        list.forEach(value => {
            processList.push({
                pmId: value.pm_id,
                pid: value.pid,
                name: value.name,
                status: value.pm2_env.status,
                memory: value.monit.memory,
                cpu: value.monit.cpu,
                lifetime: value.pm2_env.pm_uptime,
                restart: value.pm2_env.restart_time
            })
        })

        return res.send(processList)
    })
}

export default pm2list
