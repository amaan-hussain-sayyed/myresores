let service = require("../model/serviceModel");
let { render } = require("../helper/render")

async function view(req, res) {
    let data = await service.view(req.params.slug).catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        console.log("service detail error",data)
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
    return render(res, 'pages/service/view', {...data});
}

async function viewall(req, res) {
    let data = await service.viewall(req.body).catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        console.log('Service Controller',data)
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
    
    return render(res, 'pages/service/list', {...data});
}

module.exports = { view, viewall }