// const Joi = require('joi');


// const userSchema = Joi.object({
//     password: Joi.string()
//         .min(8)
//         .max(30)
//         .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/)
//         .required(),
//     // password2: Joi.string().pattern(new RegExp["^a-zA-Z0-9$"])
//     email: Joi.string()
//         .email({ minDomainSegments: 1, tlds: { allow: ["com", 'in'] } })
//         .required(),
//     repeat_password: Joi.ref('password'),
// });

// const input = Joi.object({

// })



// function validatePasswordAndEmail(user) {
//     let userval = userSchema.validate(user)
//     if (userval.error) {
//         console.log(userval.error.details)
//         return user.error
//     }
//     console.log(user)
//     return userval
// }


// validatePasswordAndEmail({ email: "shayyedamaan@gmail.in", password: "As09@lodaH", repeat_password: "As09@lodaH" })
let mail = require("nodemailer");


function mailer(mailoption) {
    return new Promise((resolve, reject) => {
        let transpoter = mail.createTransport({
            service: "gmail",
            auth: {
                user: "amaan.hussain.sayyed@gmail.com",
                pass: "hjaelotvujfxruhj"
            }
        })
        console.log('mailoption', mailoption)
        transpoter.sendMail(mailoption, (error, info) => {
            if (error) {
                console.log("mail error", error)
                reject(false)
            }

            console.log("mail is send:" + info)
            resolve(" send mail " + true)

        })
    })
}

let mailop = {
    from: "amaan.hussain.sayyed@gmail.com",
    to: "amaan.hussain.sayyed@gmail.com",
    subject: "mail sending",
    text: "the mail testing is working good"
}

mailer(mailop)