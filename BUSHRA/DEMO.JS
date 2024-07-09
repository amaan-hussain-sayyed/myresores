// let x = 10
// console.log(x);
// x = 30
// console.log(x);
// let name = "bushra"
// console.log(name);
// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }
// // let a = [1, 2, 3, 4, 5, 6, 7]
// // for (let i of a) {
// // }
// let b = [2, 3, 5, 6, 7, 8, 9, 56]
// for (let i in b) {
//     b[i] += 2
// }
// console.log(b)
// let c = [23, 5, 7, 8, 4, 77, 9]
// for (let i = 0; i < c.length; i++) {
//     c[i] *= 5

// }
// console.log(c)
// let a = "hello"
// let separate = []
// for (let i of a) {
//     separate.push(i)
// }
// console.log(separate)
// let b = "heyy"
// for (let i of b) {

//     separate.push(i)
// }

// let c = "abc"
// for (let i of c) {

//     separate.push(i)
// }
// let d = "hello"
// for (let i of d) {

//     separate.push(i)
// }

// console.log(separate)

function a(p1) {
    if (typeof (p1) != "string") {
        return ("error")
    }
    for (let i of p1) {
        if (i == "a" || i == "i" || i == "e" || i == "o" || i == "u") {
            return true
        }
    }
    return false
}


//console.log(a("mkb"))

let b = ["abc", "xyz", "blahblahblah", "hiii", "ahkdhk", "jwaeke"]
let index = Math.round(Math.random() * (b.length - 1))
//console.log(b[3])
for (let i of b) {
    if (i == "") {
        console.log(i)
    }
}