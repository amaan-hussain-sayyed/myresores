// index.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./route');
const cors = require('cors');
const app = express();
const port = require('./config.json')["port"]

// Middleware to parse incoming request bodies
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Use the todoRoutes
app.use('/api',routes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
