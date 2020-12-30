var express = require('express');
var multer = require('../core/multer');
var gfs = require('../core/gfs');
var router = express.Router();

router.post("/", multer.single("upload"), (req, res) => {
  res.json({ file: req.file });
});

router.get('/:filename', (req, res) => {
  gfs().files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file) {
      return res.status(404).json({
        err: "No files exist"
      })
    }
    //check if image
    if (file.contentType === 'image/jpeg' || file.contentType === "image/png") {
      //read output to browser
      const readStream = gfs().createReadStream(file.filename);
      readStream.pipe(res)
    } else {
      res.status(404).json({
        err: "Not an image"
      })
    }
  })
});

module.exports = router;
