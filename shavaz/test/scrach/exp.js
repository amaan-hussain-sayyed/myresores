let express = require("express")

let app = express()
app.use(express.json());

app.get("/user", (req, res) => {

    return res.send(req.body)
})

app.get("/user1/:id/:username/:password", (req, res) => {
    return res.send(req.params)
})
app.get("/user2", (req, res) => {
    return res.send(req.query)
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})



