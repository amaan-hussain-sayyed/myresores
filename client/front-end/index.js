let express = require("express");
let session = require('express-session')
let path = require('path');
// let render = require('./helper/render')
let app = express()
let { route } = require("./route")
app.use(express.json())
// app.locals.renderUI = render.locals.generateTable
// app.locals.title = "abc"
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(session({
    // It holds the secret key for session
    secret: 'Your_Secret_Key',
    // Forces the session to be saved
    // back to the session store
    resave: true,
    // Forces a session that is "uninitialized"
    // to be saved to the store
    saveUninitialized: true
}))
app.use(route);

app.listen(3002, () => { console.log("connected to port 3002") })