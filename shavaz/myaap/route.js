let express = require("express")
let authuser = require("./controller/authuser")
let router = express.Router()


router.get("/register", authuser.registerUi)
router.post("/register", authuser.register)


module.exports = { router }