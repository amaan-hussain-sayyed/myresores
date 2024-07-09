const { sequelizecon,QueryTypes}= require("../db/dbconfig")

async function viewall(){
    

    let image = await sequelizecon.query(
        `SELECT banner_image.*,name FROM banner_image
        LEFT JOIN user on banner_image.updated_by=user.id`,
        { "type": QueryTypes.SELECT }
    ).catch((err) => { return { error: err } })


    if (!image || (image && image.error)) {
        return { error: "not found" }
    }

    return {data:image}
}


async function view(id){
    if(!parseInt(id)){
        return{error:"invalide data"}
    }

    let find = await sequelizecon.query(
        `SELECT banner_iamge.*,createdUser.name as created_by ,updatedUser.name as updated_by
        FROM banner_iamge
        LEFT JOIN user as createdUser on banner_image.created_by=createdUser.id
        LEFT JOIN user as updatedUser on banner_iamge.updated_by=updatedUser.id
        WHERE  banner_image.id=${id}`,
        { "type": QueryTypes.SELECT }
    ).catch((err) => { return { error: err } })

    if(!find || (find && find.error)){
        return{error:"not found "}
    }

    return {data:find}
}


module.exports={
    view,
    viewall
}