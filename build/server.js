const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('../backend/routes/catdata')

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api", apiRoutes);
console.log("listening")
app.listen(3001);