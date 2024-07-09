const auth = require("../model/authuser");



async function registerUi(req, res) {

    return res.render("register", {})

}
async function register(req, res) {
    console.log(req.body, "this is body")
    let data = await auth.register(req.body).catch(err => {
        return { error: err }
    })

    if (!data || (data && data.error)) {
        console.log(data.error)
        return res.send(data.error)
    }

    return res.render("viewone", { user: data.data })
}

module.exports = {
    registerUi,
    register
}