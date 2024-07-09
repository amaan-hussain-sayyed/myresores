let career = require("../model/careerModel");
let { render } = require("../helper/render")

async function view(req, res) {
    let data = await career.view(req.params.slug).catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
    return render(res, 'pages/career/view', {...data});
}

async function viewall(req, res) {
    let data = await career.viewall(req.body).catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
    return render(res, 'pages/career/list', {...data});
}




module.exports = { view, viewall }