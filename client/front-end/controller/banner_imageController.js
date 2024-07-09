let banner_iamge = require("../model/banner_imageModel");


async function view(req, res) {
    let data = await banner_iamge.view(req.params.id).catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
    return res.status(200).send({ data: data })
}

async function viewall(req, res) {
    let data = await banner_iamge.viewall(req.body).catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
    return res.status(200).send({ data: data })
}




module.exports = { view, viewall }