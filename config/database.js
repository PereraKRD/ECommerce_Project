
const mongoose = require('mongoose');

//create function to connect database mongoDB
const connectDatabase = () => {
    try{
        //connect mongoDB with server
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('Connected to the Database...'))
    }
    catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
      }
}

module.exports = connectDatabase
