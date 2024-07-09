let Office_details= require("../model/office_detailsModel");
let { render } = require("../helper/render")

async function view(req, res) {
    let data = await Office_details.view(req.params.id).catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
    return res.status(200).send({ data: data })
}

async function viewall(req, res) {
    let data = await Office_details.viewall(req.body).catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
    
    return render(res, 'pages/contact/view', {...data});
}

module.exports = { view, viewall }