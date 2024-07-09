const phoneTracker = require("mobile-number-tracker");


const countryCode = "+91";
const number = "9619045242";

const serviceProvider = phoneTracker.getServiceProvider(countryCode);
console.log(`Country Code: ${countryCode}`);
console.log(`Service Provider: ${serviceProvider}`);