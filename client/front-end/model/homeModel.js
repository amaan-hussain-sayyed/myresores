let { Destination, Op } = require("../schema/destinationSchema");
let { Blog } = require('../schema/blogSchema');
let { Service} = require("../schema/serviceSchema");
let { QueryTypes, sequelizecon } = require("../db/dbconfig");

async function getHomeData(){
    let serviceWhere = {};
    let serviceAttributes = ["slug","service_name","description","banner_image"];
    let service = await Service.findAll({where:serviceWhere,attributes:serviceAttributes,raw:true}).catch((error)=>{
        return {error}
    })
    if (!service || (service && service.error)) {
        console.log("service not found error",service)
        service = [];
    }

    let color = ["2, 87, 156","244, 205, 41","46, 125, 50","0, 212, 255","240, 132, 33","182, 47, 41","181, 82, 143"]
    let colorIndex = 0;
    for(let row in service){
        service[row].color = color[colorIndex];
        service[row].banner_image = '/upload/'+service[row].banner_image;
        service[row].slug = '/service/'+service[row].slug;
        colorIndex = colorIndex + 1;
    }


    let blogQuery = `SELECT blog.slug,blog.banner_image,blog.blog_title,blog.content,
    blog.createdAt,createdUser.name as created_by
    FROM blog 
    LEFT JOIN user as createdUser on blog.created_by=createdUser.id
    WHERE blog.is_deleted=0 and tag not like '%news%'
    ORDER BY blog.id DESC
    limit 5`;
    let blog = await sequelizecon.query(blogQuery,{ "type": QueryTypes.SELECT }).catch((err) => { return { error: err } })
    if(!blog || blog.error){
        console.log("blog Error",blog)
        blog = []
    }

    for(let row in blog){
        blog[row].banner_image = '/upload/'+blog[row].banner_image;
        blog[row].content = blog[row].content.slice(0, 200-1) + '....';
    }

    let newsQuery = `SELECT blog.slug,blog.banner_image,blog.blog_title,blog.content,
    blog.createdAt,createdUser.name as created_by
    FROM blog 
    LEFT JOIN user as createdUser on blog.created_by=createdUser.id
    WHERE blog.is_deleted=0 and tag like '%news%'
    ORDER BY blog.id DESC
    limit 4`;
    let news = await sequelizecon.query(newsQuery,{ "type": QueryTypes.SELECT }).catch((err) => { return { error: err } })
    if(!news || news.error){
        console.log("news Error",news)
        news = [];
    }

    for(let row in news){
        news[row].banner_image = '/upload/'+news[row].banner_image;
        news[row].blog_title = news[row].blog_title.slice(0, 25) + '....';
        news[row].content = news[row].content.slice(0, 200) + '....';
    }
    return { blog,news,service }
}

module.exports = { 
    getHomeData
}