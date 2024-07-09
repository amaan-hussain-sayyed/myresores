let home = require("../model/homeModel");
let { render } = require("../helper/render")
var path = require('path');

async function view(req, res) {
    
    // let dirname = path.resolve(__dirname);
    // console.log("dir name",dirname)
    let data = await home.getHomeData().catch((err) => {
        return { error: err }
    })
    if (!data || (data && data.error)) {
        return res.status(400).send({ error: data.error ? data.error : "interanl server error" })
    }
    
    return render(res, 'pages/home/index', { 
        banners:[
            {url:'images/destination-greece.jpg',title:'BEAUTIFUL GREECE'},
            {url:'images/destination-italy.jpg',title:'ROMANTIC ITALY'},
            {url:'images/destination-maldives.jpg',title:'STUNNING MALDIVES'},
            {url:'images/destination-florida.jpg',title:'AWESOME FLORIDA'},
            {url:'images/destination-spain.jpg',title:'AMAZING SPAIN'},
        ],
        destinations: [],
        blog:data.blog,
        news:data.news,
        services: data.service
    })
    // return res.status(200).send({ data: data })
}

module.exports = {
    view
}