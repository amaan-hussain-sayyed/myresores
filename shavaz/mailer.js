let bcrytp = require("bcrypt")

// const nodemailer = require("nodemailer");

// function mailer(mailOptions) {
//     return new Promise((resolve, reject) => {
//         const transporter = nodemailer.createTransport({
  
//             port: 587, // Port for secure SMTP
//             secure: false, // true for 465, false for other ports,
//             host:
//             auth: {
//                 user: "username", // Your Outlook email address
//                 pass: "password" // Your Outlook password or an App Password if using 2-factor authentication
//             }
//         });

//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.error("Error sending email: " + error.message);
//                 reject(false);
//             } else {
//                 console.log("Email sent: " + info.response);
//                 resolve("Email sent successfully.");
//             }
//         });
//     });
// }

// // const mailOptions = {
// //     from: "welcome@liberty-int.com", // Sender's email address
// //     to: "savazhussain@outlook.com", // Recipient's email address
// //     subject: "Test Email for node mailer ", // Email subject
// //     text: "This is a test email." // Email body
// // };

// mailer(mailOptions)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error);
//     });

// console.log("doen")
// // Please note the following:
// 1. Replace `"your_email@outlook.com"` with your Outlook email address.
// 2. Replace `"your_password"` with your Outlook password or an App Password if you have two-factor authentication enabled for your Outlook account.

let hacdPassword = bcrytp.hashSync("1234567890", 10)
console.log(hacdPassword)