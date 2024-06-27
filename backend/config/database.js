
const mongoose = require('mongoose');

//create function to connect database mongoDB
const connectDatabase = () => {
    //connect mongoDB with server
    mongoose.connect("mongodb+srv://amayasi315:fgPbYENFKOQCW02K@amantha.ethwwnx.mongodb.net/",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('Connected to the Database...'))
}

module.exports = connectDatabase
