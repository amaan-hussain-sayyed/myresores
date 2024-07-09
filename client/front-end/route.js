let express = require("express")
let route = express();

let home = require('./controller/homeController')
let destination = require('./controller/destinationController');
let blog = require("./controller/blogController");
let service = require("./controller/serviceController")
let about = require("./controller/aboutController")
let contact = require("./controller/contactController")
let career = require("./controller/careerController")
let extra = require("./controller/extraController")

//for home 
route.get("/", home.view);
route.get("/about-us", about.view);
route.get("/contact-us", contact.viewall);
route.get("/careers", career.viewall);
route.get("/career/:slug", career.view);
route.get("/legal-notice", extra.legal);
route.get("/terms-conditions", extra.term);
route.get("/privacy-policy", extra.privacy);

//for destinations
// route.get("/destination", destination.viewall);
route.get("/destination/:slug", destination.view);
route.get("/liberty/sendmail/",destination.mailshoot)

//for blog
route.get("/blog", blog.viewall);
route.get("/blog/:slug", blog.view)
//for service
route.get("/services", service.viewall);
route.get("/service/:slug", service.view)

module.exports = { route }