// // for (let i = -10; i <= 0; i++) {
// //     // console.log(i)
// // }
// // for (let i = 10; i >= -20; --i) {
// //     //console.log(i)
// // }
// // for (let i = 300; i < 401; i += 2) {
// //     //console.log(i)
// // }
// // for (let i = 600; i >= 500; i--) {
// //     //console.log(i)
// // }
// // let c = 1
// // // for (let b = 1; b <= 10; i++) {
// // //     c*= 5
// // //     console.log(i)
// // // }


// function getmarks(p) {
//     if (!p.result) {
//         return "No result"
//     }
//     let fullmarks = 0
//     let Marks = 0
//     for (let i of p.result) {
//         if (!i.marks || i.marks < 0) {
//             i.marks = 0
//         }
//         Marks += i.marks
//         fullmarks += 100
//     }
//     let percent = ((Marks / fullmarks) * 100) + "%";
//     return { percent, Marks, fullmarks }
// }

// let student = {
//     name: 'John',
//     age: "hii",
//     result: [
//         { subject: 'Mathematics', marks: 89 },
//         { subject: 'Physics', marks: 75 },
//         { subject: 'Chemistry', marks: 95 },
//         { subject: 'Biology', marks: 80 },
//         { subject: 'English', marks: 78 },
//         { subject: 'Social Science', marks: 90 },
//         { subject: 'History', marks: 85 },
//         { subject: 'Geography', marks: 90 },
//         { subject: 'Economics', marks: 80 },
//         { subject: 'Political Science', marks: 85 },
//         { subject: 'Psychology', marks: 90 },
//         { subject: 'Zoology', marks: 80 },
//         { subject: 'Botany', marks: 85 },
//         { subject: 'Animal Welfare', marks: 85 },
//         { subject: 'Agriculture', marks: 90 },
//         { subject: 'Environmental Science', marks: 85 },
//         { subject: 'Business Studies', marks: 80 },
//         { subject: 'Accounting', marks: 85 },
//         { subject: 'Statistics', marks: 90 },

//     ]
// }
// console.log(getmarks(student))

function getTotal(num){
    function recur() {
        if (arguments.length <= 1) {
            return arguments[0]
        }
        let p = 0
        for (i of arguments) {
            p += +i
        }
        p += ''
        return recur(...p)
    }
    num += ''
    return recur(...num)
}

console.log(getTotal(1111111))

