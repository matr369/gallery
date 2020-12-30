const mongoose = require('./mongoose');
const Grid = require('gridfs-stream');

let conn = mongoose.connection;
let gfs;
conn.once('open', () => {
    //initialize our stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('imageUpload');
    console.log("Connected to db");
});

const getGFS = () => {
    return gfs;
};

module.exports = getGFS;
