const express = require('express');
const cors = require('cors');
const filesRoutes = require('./routes/files');
const imageRoutes = require('./routes/image');

var app = express();
app.use(cors());

app.use("/files", filesRoutes);
app.use("/image", imageRoutes );


module.exports = app;
