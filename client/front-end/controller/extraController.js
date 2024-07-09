let { render } = require("../helper/render")

async function legal(req, res) {
    let data =[]
    return render(res, 'pages/extra/legal', {...data});
}

async function term(req, res) {
    let data =[]
    return render(res, 'pages/extra/term', {...data});
}

async function privacy(req, res) {
    let data =[]
    return render(res, 'pages/extra/privacy', {...data});
}

module.exports = { legal, term, privacy }