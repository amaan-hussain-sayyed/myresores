let destination = require("../model/destinationModel");
let { render } = require("../helper/render")

async function view(req, res) {
    let data = await destination.view(req.params.slug).catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        console.log('Destination Controller',data)
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }

    return render(res, 'pages/destination/view', {...data});
}

async function viewall(req, res) {
    let data = await destination.viewall(req.body).catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
    console.log('destination', data)
    return render(res, 'pages/destination/list', { destinations: data.data })
    // return res.status(200).send({ data: data })
}

async function mailshoot(req, res) {
    let data = await destination.mailshoot(req.body).catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
   
    return res.status(200).send({ data: data })
}

module.exports = { view, viewall ,mailshoot}