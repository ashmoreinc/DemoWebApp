const PASS_TEST = require('./demoFuncs').PASS_TEST;

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const port = 80;

app.get('/', function (req, res) {
    console.log("Request received from " + req.ip);
    if(PASS_TEST) {
        res.sendFile('static/index.html', {root: __dirname});
    } else {
        res.sendFile('static/indexFailed.html', {root: __dirname});
    }
})


app.listen(port, () => {
    console.log("Now listening on port " + port);
})
