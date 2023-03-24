// mongoose package import
const mongoose = require('mongoose');

// .env config settings
require('dotenv').config()

// define connection string 
const url = `mongodb://` + process.env.MONGODB_HOST + `:` + process.env.MONGODB_PORT + `/` + process.env.MONGODB_DB ;
const auth_url = ``; // TODO : add connection url with username and password

// CONNECT TO DATABASE FOR SPECIFIED URL
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log(`mongodb started. connection established!`)
}).catch(error => (
    console.error(`mongodb connection failed!\nError: ${error}`)
));

// EXPORT
module.exports = mongoose;