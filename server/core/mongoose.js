const mongoose = require('mongoose');
//const mongoURL = "mongodb+srv://1:1@cluster0.qwfhi.mongodb.net";
const mongoURL = process.env.MONGO_URL || "mongodb://mongo:27017";
mongoose.connect(
    mongoURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
module.exports = mongoose;
module.exports.mongoURL = mongoURL;
