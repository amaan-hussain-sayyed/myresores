let { Blog, Op } = require('../schema/blogSchema');
let { QueryTypes, sequelizecon } = require("../db/dbconfig")
let moment = require("moment");
let joi = require("joi");


async function view(slug) {
    if (!slug) {
        return { error: "Page Not Found",status:404 }
    }

    let blogWhere = {slug:slug,is_deleted:false}
    let blogAttributes = [ 
        "meta_title","meta_keyword","banner_image","blog_title","content","tag","createdAt"
    ]
    let blog = await Blog.findOne({where:blogWhere,attributes:blogAttributes,raw:true}).catch((error)=>{
        return {error}
    })
    if (!blog || (blog && blog.error)) {
        console.log("Blog not found error",blog)
        return { error: "not found", status:404 }
    }

    blog.tag = blog.tag.split(',')
    blog.createdAt = moment(blog.createdAt)
    blog.createdAt = [blog.createdAt.format('DD'),blog.createdAt.format('MMM')]
    if(blog.banner_image){
        blog.banner_image = '/upload/'+blog.banner_image
    }

    let recentWhere = { slug:{[Op.not]:slug}, tag:{[Op.notLike]: '%news%'} }
    let recentAttributes = ["banner_image","blog_title","slug","createdAt"]
    let recentOrder = [ ['id', 'DESC'] ]
    let recent = await Blog.findAll({
        where:recentWhere,attributes:recentAttributes,
        limit:4,raw:true,order:recentOrder
    }).catch((error)=>{
        return {error}
    })
    if (!recent || (recent && recent.error)) {
        console.log("Recent Blog not found error",recent)
    }

    for(let row in recent){
        recent[row].slug = '/blog/'+recent[row].slug;
        recent[row].banner_image = '/upload/'+recent[row].banner_image;
        recent[row].blog_title = (recent[row].blog_title.length >= 30) ? recent[row].blog_title.slice(0, 30) + '....':recent[row].blog_title;
        recent[row].createdAt = moment(recent[row].createdAt).format('MMMM D, YYYY')
    }

    return { blog:blog,recentBlog:recent }
}


async function viewall(params) {
    let blogWhere = { tag:{[Op.notLike]: '%news%'} }
    let blogAttributes = [ "banner_image","blog_title","slug","content","tag","createdAt" ]
    let blogs = await Blog.findAll({
        where:blogWhere,attributes:blogAttributes,raw:true
    }).catch((error)=>{
        return {error}
    })
    if (!blogs || (blogs && blogs.error)) {
        console.log("Blog not found error",blogs)
        return { error: "Blogs not found", status:404 }
    }

    let tags = []
    for(let row in blogs){
        let currentTags = blogs[row].tag.split(',');
        tags.push(...currentTags)
        blogs[row].tag = currentTags
        blogs[row].slug = '/blog/'+blogs[row].slug;
        blogs[row].banner_image = '/upload/'+blogs[row].banner_image;
        blogs[row].content = (blogs[row].content.length >= 400) ? blogs[row].content.slice(0, 400) + '....':blogs[row].content;
        blogs[row].createdAt = moment(blogs[row].createdAt)
        blogs[row].createdAt = [blogs[row].createdAt.format('DD'),blogs[row].createdAt.format('MMM')]
    }
    tags = [...new Set(tags)]

    let recentWhere = { tag:{[Op.notLike]: '%news%'} }
    let recentAttributes = ["banner_image","blog_title","slug","createdAt"]
    let recentOrder = [ ['id', 'DESC'] ]
    let recent = await Blog.findAll({
        where:recentWhere,attributes:recentAttributes,
        limit:4,raw:true,order:recentOrder
    }).catch((error)=>{
        return {error}
    })
    if (!recent || (recent && recent.error)) {
        console.log("Recent Blog not found error",recent)
    }

    for(let row in recent){
        recent[row].slug = '/blog/'+recent[row].slug;
        recent[row].banner_image = '/upload/'+recent[row].banner_image;
        recent[row].blog_title = (recent[row].blog_title.length >= 30) ? recent[row].blog_title.slice(0, 30) + '....':recent[row].blog_title;
        recent[row].createdAt = moment(recent[row].createdAt).format('MMMM D, YYYY')
    }

    return{ blogs:blogs, recentBlog:recent, tags:tags }
}


module.exports = {
    viewall,
    view
}