let joi = require("joi");
let { Destination, Op } = require("../schema/destinationSchema");
const {Office_details} = require("../schema/office_detailsSchema");
const { DestiantionGallary}= require("../schema/destiantonGallarySchema")
let { QueryTypes, sequelizecon } = require("../db/dbconfig");
const {}= require('..')
const { mailer } = require("../helper/nodemailer");

async function view(slug) {
        if (!slug) {
            return { error: "Page Not Found",status:404 }
        }

        let destinationWhere = {slug:slug,is_deleted:false}
        let destination = await Destination.findOne({where:destinationWhere,raw:true}).catch((error)=>{return{error}})
        if (!destination || (destination && destination.error)) {
            console.log("Destination not found error",destination)
            return { error: "not found", status:404 }
        }

        destination.visit_reason = destination.visit_reason.split('@np ')
        destination.destination_guide = destination.destination_guide.split('.')
        if(destination.banner_image){
            destination.banner_image = '/upload/'+destination.banner_image
        }

    
        let officeAttributes = [
            "Name", "address", "instagram",
            "twitter", "facebook", "linkedIN", "gmail", "telephone_no",
        ];
        let officeWhere = {destination_id:destination.id};
        let office = await Office_details.findAll({attributes:officeAttributes,where:officeWhere,raw:true}).catch(err=>{
            return {error:err}
        })
        if(!office || (office && office.error)){
            console.log("Destination Office Not Found Error",office)
            // return{error:"cannot found"}
        }
        // console.log("office details",office)
        let galleryAttributes = ["title", "url"];
        let galleryWhere = {destination_id:destination.id};
        let gallery = await DestiantionGallary.findAll({attributes:galleryAttributes,where:galleryWhere,raw:true}).catch(err=>{
            return{error:err}
        })
        if(!gallery || (gallery && gallery.error)){
            console.log("Destination Gallery Not Found Error",gallery)
            // return{error:"cannot get pics"}
        }

        for(let row in gallery){
            gallery[row].url = '/upload/'+gallery[row].url
        }
        
        return {
            office:office[0],
            gallery:gallery,
            des:destination
        }
    }

    async function mailshoot(params) {
        let valid = await verifyemail(params).catch(err=>{
            return{err:error}
        })
       
        if(!valid){
            console.log(valid.error)
            return {error:valid.error}
        }

        console.log("this is the params",params)
        
        let mailoption = {
            from: "sohalansari4934@gmail.com",
            to: params.email,
            subject: "testing mail ",
            text:"this function is working for the clint "
        }
    
        let sendmail = await mailer(mailoption).catch((err) => {
            return { error: err }
        })
    
        if (!sendmail || (sendmail && sendmail.error)) {
            return { error: "cannot send mail to head office" }
        }
    
        let mailOption = {
            from: "sohalansari4934@gmail.com",
            to:"hsayyedamaan@gmail.com",
            subject:"testing email ",
            text:"this function is working"
        }
    
        let sendMail = await mailer(mailOption).catch((err) => {
            return { error: err }
        })
    
        if (!sendMail || (sendMail && sendMail.error)) {
            return { error: "cannot send mail" }
        }
    
        return { data: "mail send" }
    
    }


async function verifyemail(params) {
        let schema = joi.object({
            email: joi.string().max(100).min(0).required(),
    
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
    

async function verifyview(params) {
    let schema = joi.object({
        destination_name: joi.string().max(100).min(0)

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

async function viewall(params) {

    let valide = await verifyview(params).catch((err) => {
        return { error: err }
    })

    if (!valide || (valide && valide.error)) {
        return { error: valide.error }
    }


    let find = await sequelizecon.query(
        `SELECT destination.*,name FROM destination 
        LEFT JOIN user on destination.updated_by=user.id
        WHERE destination.is_deleted=0 `,
        { "type": QueryTypes.SELECT }
    ).catch((err) => { return { error: err } })

    if (!find || (find && find.error)) {
        return { error: "not found" }
    }

    return { data: find }
}

async function menuData(params) {
    let destination = await sequelizecon.query(
        `SELECT destination.slug,destination.destination_name,destination.region
        FROM destination 
        WHERE destination.is_deleted=0`,
        { "type": QueryTypes.SELECT }
    ).catch((err) => { return { error: err } })

    if (!destination || (destination && destination.error)) {
        return { error: "not found" }
    }

    let des = {};
    for(let record of destination){
        if(!des[record.region]){
            des[record.region] = []
        }
        des[record.region].push(record);
    }

    let count = 0;
    let popularDes = []
    for(let record of destination){
        if(count >= 40){ break; }
        popularDes.push(record);
        count = count + 1;
    }



    return { data: des,popularDes }
}







    


module.exports = { 
    view,
    viewall,
    menuData,
    mailshoot,
}