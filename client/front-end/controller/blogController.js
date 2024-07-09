let blog = require("../model/blogModel")
let { render } = require("../helper/render")

async function view(req, res) {
    let data = await blog.view(req.params.slug).catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        console.log('Blog Controller',data)
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
    
    return render(res, 'pages/blog/view', {...data});
}

async function viewall(req, res) {
    let data = await blog.viewall(req.body).catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        console.log('Blog list Controller',data)
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
    return render(res, 'pages/blog/list', {...data});
}


module.exports = { view, viewall }