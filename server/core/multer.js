const mongoose = require('./mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

let storage = new GridFsStorage({
    url: mongoose.mongoURL,
    file: (req, file) => {
        return new Promise(
            (resolve) => {
                const fileInfo = {
                    filename: file.originalname.replace(/ /g, '_'),
                    bucketName: "imageUpload"
                };
                resolve(fileInfo)
            }
        )
    }
});

const upload = multer({ storage });

module.exports = upload;
