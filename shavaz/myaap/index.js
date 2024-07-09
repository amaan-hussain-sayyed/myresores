let express = require("express")
const { router } = require("./route")

let app = express()
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(router)
app.listen(3001, () => {
    console.log("connected to bd")
})