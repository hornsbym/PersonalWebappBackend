const express = require('express')
const dotEnv = require("dotenv")
const path = require("path");
const cors = require('cors')
const http = require('http')
const AWS = require('aws-sdk')
const logger = require('morgan')

dotEnv.config()

// Configure AWS to allow us access
// Hide the access/secret access keys in the env
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY, // Access key ID
    secretAccesskey: process.env.AWS_SECRET_KEY, // Secret access key
    region: process.env.AWS_REGION //Region
})

const app = express()
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// Pull in routes here.
const getGameNamesRoute = require("./routes/getGameNames")
const getGamePhotosRoute = require("./routes/getGamePhotosByName")
const postAddNewGameRoute = require("./routes/addNewGame")
const postVerifyUserRoute = require("./routes/verifyUser")

// Apply routes here
app.use('/', express.static(path.join(__dirname, "build")))
app.use('/getGameNames', getGameNamesRoute);
app.use('/getGamePhotos', getGamePhotosRoute);
app.use('/addNewGame', postAddNewGameRoute);
app.use('/verifyUser', postVerifyUserRoute);

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`)
})