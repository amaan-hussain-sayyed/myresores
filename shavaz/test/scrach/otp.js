let otpGenerate = require("otp-generator")

 let otp = otpGenerate.generate(6,{upperCaseAlphabets:false,lowerCaseAlphabets:false,specialChars:false})

console.log(otp)