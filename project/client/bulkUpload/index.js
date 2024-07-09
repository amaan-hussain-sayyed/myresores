const express = require('express');
const uploadImage = require('./multer');
const ExcelToJson = require('./xlsx');


const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/a', (req, res) => {
    return res.status(200).sendFile(__dirname + '/index.html')
})

app.post('/uploadfile', async (req, res) => {
    try {
        let file = await uploadImage(req, res, 'uploadfile')
        let data = ExcelToJson(`./public/upload/${file.filename}`)
        console.log(" excel data", data)
        if (!data || data.length <= 0) {
            return res.send("");
        }

        return res.send(data)
    } catch (error) {
        console.log("Catch error", error)
        return res.send("Internal error")
    }
})


app.listen(3001, () => {
    console.log("connecte to port 3001")
})