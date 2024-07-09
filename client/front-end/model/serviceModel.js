let { Service, Op } = require("../schema/serviceSchema");
let { Item } = require("../schema/itemSchema")
let { QueryTypes, sequelizecon } = require("../db/dbconfig")
let joi = require("joi");

async function view(slug) {
    if (!slug) {
        return { error: "invalide data" }
    }

    let serviceWhere = {slug:slug,is_deleted:false}
    let serviceAttributes = [
        "id","meta_title","meta_keyword","meta_description","service_name","description","banner_image"
    ]
    let service = await Service.findOne({where:serviceWhere,attributes:serviceAttributes,raw:true}).catch((error)=>{
        return {error}
    })
    if (!service || (service && service.error)) {
        console.log("service not found error",service)
        return { error: "Service not found", status:404 }
    }

    if(service.banner_image){
        service.banner_image = '/upload/'+service.banner_image
    }

    let itemWhere = {service_id:service.id,is_deleted:false}
    let itemAttributes = [
        "item_name","item_description","item_image"
    ]
    let item = await Item.findAll({where:itemWhere,attributes:itemAttributes,raw:true}).catch((error)=>{
        return {error}
    })
    if (!item || (item && item.error)) {
        console.log("item not found error",item)
    }

    for(let row in item){
        item[row].item_image = '/upload/'+item[row].item_image;
    }

    return { 
        service,item,gallery:[]
    }
}

async function viewall(params) {
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

    return { services: service }
}

//function for delete service

//fucntion for veiw item
async function viewItem(id) {
    if (!parseInt(id)) {
        return { error: "invalide data" }
    }

    let find = await sequelizecon.query(
        `SELECT item.*,name FROM item 
        LEFT JOIN user on item.updated_by=user.id
        WHERE item.is_deleted=0 and item.id=${id}`,
        { "type": QueryTypes.SELECT }
    ).catch((err) => { return { error: err } })

    if (!find || (find && find.error)) {
        return { error: "not found" }
    }

    return { data: find }
}

//joi funtion for allveiw item
async function verifyviewall(params) {
    let schema = joi.object({
        item_name: joi.string().max(100).min(0),

    }).options({ abortEarly: false })
    let check = schema.validate(params)
    if (check.error) {
        let error = [];
        for (let err of check.error.details) {
            error.push(err.message)
        }
        return { error: error }
    }
    return { data: check.value }
}

//functon veiwall item 
async function viewallItem(params) {

    let valide = await verifyviewall(params).catch((err) => {
        return { error: err }
    })

    if (!valide || (valide && valide.error)) {
        return { error: valide.error }
    }


    let find = await sequelizecon.query(
        `SELECT item.*,name FROM item 
        LEFT JOIN user on item.updated_by=user.id
        WHERE item.is_deleted=0 `,
        { "type": QueryTypes.SELECT }
    ).catch((err) => { return { error: err } })

    if (!find || (find && find.error)) {
        return { error: "not found" }
    }

    return { data: find }
}




module.exports = {
    viewall,
    view,
    viewItem,
    viewallItem
}