// function add(x,y){
//      let z
//     z=x+y;
//     console.log(z)
// return z;
// }
// let b = add(70,60)

//Anonymous function
// let m=function()
// {
//     let a=20;
let joi = require("joi")


function validetion(param) {
    let schema = joi.object({
        name: joi.string().max(10)
    })

    let verify = schema.validate(param, { abortEarly: false })
    if (verify.error) {
        let msg = [];
        for (let i of verify.error.details) {
            msg.push(i.message)
        }
        console.log(msg)
        return { error: msg }
    }
    return { data: verify.value };
}

console.log(validetion({ name: "h" }))
