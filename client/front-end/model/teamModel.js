let { Team } = require("../schema/teamSchema");

let joi = require("joi");
let{QueryTypes,sequelizecon}=require("../db/dbconfig")

  



async function view(id) {
    if (!parseInt(id)) {
        return { error: "invalide data" }
    }

    let team = await sequelizecon.query(
        `SELECT team.*,createdUser.name as created_by ,updatedUser.name as updated_by FROM team 
        LEFT JOIN user as createdUser on team.created_by=createdUser.id
        LEFT JOIN user as updatedUser on team.updated_by=updatedUser.id
        WHERE team.is_deleted=0 and team.id=${id}`,
        { "type": QueryTypes.SELECT }
    ).catch((err) => { return { error: err } })

    if (!team || (team && team.error)) {
        return { error: "not found" }
    }

    return { data: team[0] }
}

async function verifyview(params) {
    let schema = joi.object({
        meta_title: joi.string().max(100).min(0),

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

    let team = await sequelizecon.query(
        `SELECT team.*,user.name FROM team 
        LEFT JOIN user on team.updated_by=user.id
        WHERE team.is_deleted=0 `,
        { "type": QueryTypes.SELECT }
    ).catch((err) => { return { error: err } })


    if (!team || (team && team.error)) {
        console.log("team error 2",team.error)
        return { error: "not found" }
    }

    return { data: team }
}


module.exports = {
    view,
    viewall
}