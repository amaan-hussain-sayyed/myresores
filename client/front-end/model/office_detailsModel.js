let {Office_details}=require("../schema/office_detailsSchema")
let {sequelizecon,QueryTypes,Op}= require("../db/dbconfig")

async function viewall(params) {

    let office = await sequelizecon.query(
        `SELECT office_details.*,destination.destination_name,destination.slug
        FROM office_details
        LEFT JOIN destination on office_details.destination_id=destination.id
        WHERE office_details.is_deleted=0 `,
        { "type": QueryTypes.SELECT }
    ).catch((err) => { return { error: err } })

    if (!office || (office && office.error)) {
        return { error: "not found" }
    }

    let des = {};
    for(let record of office){
        if(!des[record.region]){
            des[record.region] = []
        }
        des[record.region].push(record);
    }

    return { office: des }
}


module.exports ={
    viewall
}