var express = require('express');
var gfs = require('../core/gfs');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


router.get('/', (req, res) => {
    gfs().files.find().toArray((err, files) => {
        return res.json(!files || files.length === 0 ? [] : files);
    })
});

router.get('/:id', (req, res) => {
    gfs().files.findOne({ _id: ObjectId(req.params.id) }, (err, file) => {
        console.log(file, err);
        if (!file) {
            return res.status(404).json({
                err: "No files exist"
            })
        }
        return res.json(file)
    })
});

router.delete("/:id", (req, res) => {
    gfs().remove({ _id: ObjectId(req.params.id), root: 'imageUpload' }, (err) => {
        if (err) {
            return res.status(404).json({ err: err })
        }
        return res.json({result: "ok"});

    })
});

module.exports = router;
