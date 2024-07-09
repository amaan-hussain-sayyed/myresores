let { User } = require("../schema/user")
let joi = require("joi")
let security = require("../helper/security")
let { userPermission } = require("../middleware/auth")
let { Permission } = require("../schema/permission")
let { Userpermission } = require("../schema/userpermission")

/// Joi validation for Register
async function verifyRegister(params) {
    let schema = joi.object({
        USERNAME: joi.string().max(55).required(),
        EMAIL_ID: joi.string().min(8).max(155).required(),
        PASSWORD: joi.string().min(6).max(15).required(),
        PHONE_NO: joi.number().required()
    })
    let valid = await schema.validateAsync(params, {
        abortEarly: false
    })
        .catch((error) => { return { error } })
    if (!valid || (valid && valid.error)) {
        let msg = []
        for (let i of valid.error.details) {
            msg.push(i.message)
        }
        return { error: msg }
    }
    return { data: valid.data }
}

/// Regester Api
async function register(params) {
    let verify = await verifyRegister(params).catch((error) => { return { error } })
    console.log("verify", verify)
    if (!verify || (verify && verify.error)) {
        return { error: "error in user data" }
    }
    //checking email is registerd or not
    let verifyUser = await User.findOne({ where: { EMAIL_ID: params.EMAIL_ID }, raw: true }).catch((error) => {
        return { error }
    })
    console.log("verifyUser", verifyUser)
    if (verifyUser) {
        return { error: "user already created1" }
    }
    //password encryption
    let PASSWORD = await security.hash(params.PASSWORD, 10).catch((error) => { return { error } })
    if (!PASSWORD || (PASSWORD && PASSWORD.error)) {
        return { error: "internal server error", status: 500 }
    }

    params.PASSWORD = PASSWORD
    //user creation
    let user = await User.create(params).catch((error) => { return { error } })
    if (!user || (user && user.error)) {
        return { error: "internal server error2", status: 500 }
    }
    //asign permission
    let userPermission = { User_id: user.Id, Permission_id: 3 }
    let UserP = await Userpermission.create(userPermission).catch((error) => {
        return { error }
    })
    if (!UserP || (UserP && UserP.error)) {
        let dlt = await user.destroy({ where: { Id: user.Id } })
        if (!dlt || (dlt && dlt.error)) {
            return { error: "Contact admin" }
        }
        console.log("Userp", UserP)
        return { error: "user not created", status: 500 }
    }
    return { data: user }
}

// joi validation for login
async function verifyLogin(param) {
    let schema = joi.object({
        USERNAME: joi.string().max(155).required(),
        PASSWORD: joi.string().required()
    })
    let valid = await schema.validateAsync(param, {
        abortEarly: false
    }).catch((error) => { return { error } })
    if (!valid || (valid && valid.error)) {
        let msg = []
        for (let i of valid.error.details) {
            msg.push(i.message)
        }
        return { error: msg }
    }
    return { data: valid.data }
}


// LOGIN
async function login(params) {
    let verify = await verifyLogin(params).catch((error) => { return { error } })
    if (!verify || (verify && verify.error)) {
        return { error: verify.error, status: 400 }
    }
    //verify user
    let user = await User.findOne({
        where: { USERNAME: params.USERNAME }
    }).catch((error) => { return { error } })
    if (!user || (user && user.error)) {
        return { error: "User not found ", status: 404 }
    }
    //verify password
    let check = await security.compare
        (params.PASSWORD, user.PASSWORD).catch((error) => { error })
    if (!check || (check && check.error)) {
        return { error: "user not found 2", status: 401 }
    }
    //token generate
    let token = await security.encrypt({ id: user.id }, "1234").catch((error) => { error })
    if (!token || (token && token.error)) {
        // console.log("token", token)
        return { error: "internal server error", status: 500 }
    }
    let updateUser = await User.update({ token: token }, { where: { id: user.id } }).catch((error) => { return { error } })
    if (!updateUser || (updateUser && updateUser.error)) {
        return { error: "Token not save", status: 400 }
    }
    //return success
    return { data: "login success", status: 200 }
}

module.exports = { register, login }