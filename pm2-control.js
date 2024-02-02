import pm2 from "pm2"


function pm2list(req, res) {
    const processList = []
    pm2.list((err, list) => {
        if (list.length === 0) {
            console.log("Process not found")
        }

        list.forEach(value => {
            console.log(value.pid, value.name)
            processList.push({
                pid: value.pid,
                name: value.name
            })
        })

        console.log(processList)
        return res.send(processList)
    })
}

export default pm2list
