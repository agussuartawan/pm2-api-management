import axios from "axios";

const url = "http://8.215.27.151:2375"

async function dockerPs(req, res) {
    const dockerList = []
    await axios.get(`${url}/containers/json`)
        .then(response => {
            const containers = response.data
            containers.forEach(container => {
                  dockerList.push({
                      id: container.Id,
                      image: container.Image,
                      state: container.State,
                      status: container.Status
                  })
            })
            res.send(dockerList)
        })
        .catch(err => {
            res.status(500).json({
                status: "error",
                message: err.message
            })
            console.error(err)
        })
}

export default dockerPs
