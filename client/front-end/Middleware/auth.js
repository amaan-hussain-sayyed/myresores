// this file for the authuntication of user for perfoming some task
//the initialization of libarery and importing files 
let { Sequelize, Model, DataTypes, QueryTypes, sequelizecon } = require("../db/dbconfig")
let { decrypt } = require("../helper/jwt")
//the initializaton of libarery and file ends here


//this is the function that verify the permission of user and there authurization....
function auth(primises) {
    return async (req, res, next) => {

        let token = req.session.userToken; //req.header("Authorization");

        if (!token) {
            return res.redirect('/user/login?message=cannot valided auntenticatio')
            // return res.status(400).send({ return: "cannot valided auntenticatio" })
        }
        let data = await decrypt(token, "1234").catch((err) => { return { error: err } })
        console.log(data.error)
        if (!data || (data && data.error)) {
            return res.redirect('/user/login?message=not valide user')
            // return res.status(400).send("not valide user")
        }
        let users = await sequelizecon.query(
            `select user.id,user.name,permission 
            from user LEFT JOIN user_permission 
            on user.id =user_permission.user_id 
            left join permission on 
            user_permission.permission_id=permission.id 
            where user.id = ${data.id}`,
            { "type": QueryTypes.SELECT }
        ).catch((err) => { return { error: err } })

        if (!users || (users && users.error)) {
            return res.redirect('/user/login?message=plese inter the rght info')
            // return res.status(400).send("plese inter the rght info")
        }

        let permissions = {}
        for (let row of users) {
            permissions[row.permission] = true
        }
        if (permissions.length <= 0 || !permissions[primises]) {
            return res.redirect('/user/login?message=your not valide')
            // return res.status(400).send({ warrnig: "your not valide " })
        }

        req.userData = {
            id: data.id,
            name: users.name,
            permission: primises
        }


        next();
    }
}

//file exportation
module.exports = { auth }