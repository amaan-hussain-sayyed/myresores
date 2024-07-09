// function add(a, b, cb) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return cb('Invaliut');
//     }
//     return cb(null, a + b)
// }


// function ctp(a, b) {
//     return new Promise((res, rej) => {
//         add(a, b, (err, data) => {
//             if (err) {
//                 return rej(err)
//             }

//             return res(data)
//         })
//     })
// }

// ctp(10, 20).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })




let data = [
    { name: "savaz", email: "savaz@gmail.co" }
    ,
    { name: "savaz", email: "savaz@gmail.co" }
    ,
    { name: "savaz", email: "savaz@gmail.co" }
    ,
    { name: "savaz", email: "savaz@gmail.co" }
    ,
    { name: "savaz", email: "savaz@gmail.co" }
    ,
    { name: "savaz", email: "savaz@gmail.co" }
    ,
    { name: "savaz", email: "savaz@gmail.co" }
    ,]








let lis = new emp(data)

