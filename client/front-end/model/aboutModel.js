let { Team, Op } = require('../schema/teamSchema');

async function getData(slug) {
    let teamWhere = {is_deleted:false}
    let teamAttributes = [ 
        "name","image_name"
    ]
    let team = await Team.findAll({where:teamWhere,attributes:teamAttributes,raw:true}).catch((error)=>{
        return {error}
    })
    if (!team || (team && team.error)) {
        console.log("team not found error",team)
        return { error: "not found", status:404 }
    }

    return {team}
}

module.exports = { 
    getData
}