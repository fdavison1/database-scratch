module.exports = {
    getTasks: (req, res) => {
        const db = req.app.get('db')
        db.get_tasks()
            .then(result => {
                // console.log(result)
                res.status(200).send(result)
            })
    },
    getProjects: (req, res) => {
        const db = req.app.get('db')
        db.get_projects()
            .then(result => {
                // console.log(result)
                res.status(200).send(result)
            })
    },
    getTaskOrder: (req, res) => {
        const db = req.app.get('db')
        db.get_taskorder()
            .then(result => {
                // console.log(result)
                res.status(200).send(result)
            })
    },
    updateTasks: (req, res) => {
        // console.log(req.body)
        // console.log(req.body[0])
        // return console.log(req.body[0].task_id)
        // return console.log(req.body.length)
        return console.log(req.body)
      


        }
    }