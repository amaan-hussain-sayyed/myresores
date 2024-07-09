let para = "hello world ist amaan hello world ist this is the first time you hghg fdfd bvc nyg kgnhsds hsds jkls mnkb me hi"
let chars = ""
let result = []
para = para + " "
for (let i of para) {
    if (i == " ") {
        for (let j of chars) {
            if (j === "a" || j === "e" || j === "i" || j === "o" || j === "u") {
                result[result.length] = chars
                chars = ""
                break;
            }
        }
        chars = ""
        continue;
    }

    chars += i

}
console.log(result)



