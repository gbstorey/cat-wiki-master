const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('../backend/routes/catdata')

const { mongoose } = require("mongoose");
const User = require("../backend/models/user")

const dotenv = require("dotenv");
dotenv.config();

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api", apiRoutes);

mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_PASS}@cluster0.smimobs.mongodb.net/cats`)
    .then(() => {
        User.findOne().then(user => {
            if (!user) {
                const user = new User();
                user
                    .save()
                    .then(() => {
                        console.log("New User Created")
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        })
        console.log("Database connection established, listening on port 3001");
        app.listen(3001);
    })
    .catch((err) => {
        console.log(err);
    })