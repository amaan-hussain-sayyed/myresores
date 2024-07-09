let { Career, Op } = require('../schema/careerSchema');
const {QueryTypes,sequelizecon} = require("../db/dbconfig")

async function view(slug) {
    if (!slug) {
        return { error: "invalide data",status:400 }
    }

    let careerWhere = {is_deleted:false,slug:slug}
    let careerAttribute = ["name","job_location","description","slug"]
    let career = await Career.findOne({where: careerWhere, attributes:careerAttribute,raw:true}).catch((error)=>{
        return {error}
    })
    if (!career || (career && career.error)) {
        console.log("career not found error",career)
        return { error: "not found", status:404 }
    }

    return { career }
}

//function for viewall 
async function viewall() {
    let careerWhere = {is_deleted:false}
    let careerAttribute = ["name","job_location","slug"]
    let career = await Career.findAll({where: careerWhere, attributes:careerAttribute,raw:true}).catch((error)=>{
        return {error}
    })
    if (!career || (career && career.error)) {
        console.log("career not found error",career)
        return { error: "not found", status:404 }
    }

    for(let row in career){
        career[row].slug = '/career/'+career[row].slug;
    }
    return { career }
}

module.exports={
    view,viewall
}