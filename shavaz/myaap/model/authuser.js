const joi = require("joi");
const { User } = require("../schema/user");

async function verifyrgister(params) {
    let schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(8).required()
    })

    let validate = await schema.validate(params, { abortEarly: true })

    if (!validate || (validate && validate.error)) {
        let msg = []
        for (let i of validate.error.details) {
            msg.push(i.message)
        }
        return { error: msg }
    }

    return { data: validate }

}

async function register(params) {
    let valid = await verifyrgister(params).catch(err => {
        return { error: err }
    })

    if (!valid || (valid && valid.error)) {
        return { error: valid.error }
    }
    console.log(params)
    let find = await User.findOne({ where: { email: params.email } }).catch(err => {
        return { error: err }
    })

    if (find || (find && find.error)) {
        return { error: find.error }
    }


    let create = await User.create(params).catch(err => {
        return { error: err }
    })

    if (!create || (create && create.error)) {
        return { error: create.error }
    }


    return { data: create }

}



module.exports = { register }