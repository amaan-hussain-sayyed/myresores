// const bcrypt = require('bcrypt');

// let OrginalPassword="1234567890"

// let encryptedPassword = bcrypt.hashSync(OrginalPassword, 10)

// console.log(encryptedPassword)


// let comparePassword = bcrypt.compareSync('1234567890', encryptedPassword)

// console.log(comparePassword)


const jwt = require('jsonwebtoken');

// // Secret key to sign and verify the JWT
// const secretKey = 'your_secret_key';

// // User information (you might get this from a database or another source)
// const user = {
//     id: 1,
//     username: 'example_user',
// };

// Create a JWT
async function encrypt(plainTex, secretKey) {
    return new Promise((resolve, reject) => {
        
        jwt.sign(plainTex, secretKey, (err, encryptText) => {
            if (err) {
                return reject("cannot encrypt texr")
            }
            return resolve(encryptText)
        })

    })
}
async function decryt(encryptText, secretKey) {
    return new Promise((resolve, reject) => {
        
        jwt.verify(encryptText, secretKey, (err,text) => {
            if (err) {
                return reject("cannot encrypt texr")
            }
            return resolve(text)
        })

    })
}

async function testing(data) {
    let encryptText = await encrypt( data,"3999").catch(err => {
        return err
    })
    if (typeof encryptText == "string") { 
        console.log(`Encrypted text is : ${encryptText}`);
    } else {
        
        console.error(encryptText)
        return encryptText
    }
    let decrytText = await decryt(encryptText, "3999").catch(err => {
       return `Error! Can not decrypt with key "3999"\n${err}`;
    })
    console.log(decrytText)
   return decrytText
}

testing({id:123})
