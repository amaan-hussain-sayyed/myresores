let home = require("../model/homeModel");
let { render } = require("../helper/render");
let about = require("../model/aboutModel")

async function view(req, res) {
    let data = await about.getData().catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
    return render(res, 'pages/about/view',{...data})
}

module.exports = {
    view
}