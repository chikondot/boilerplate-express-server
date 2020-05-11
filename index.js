// main packages for express
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const routes = require('./src/routes');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// server endpoint(s)
app.use('/api', routes);

//  run application
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});