const multer = require('multer');

const storage = multer.diskStorage({
    destination: "public/upload",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

module.exports = (req, res, fieldName = 'uploadfile') => {

    let upload = multer({ storage }).single(fieldName)
    return new Promise((resovel, rejects) => {
        upload(req, res, err => {
            if (err) {
                rejects(err)
            };
            console.log(req.file)
            resovel(req.file)
        })
    })
}