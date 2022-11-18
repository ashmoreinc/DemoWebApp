// Demo testing functionality. Import allows the web page to show if the test should have failed.
const testCase = require('./demoFuncs').testCase;

<<<<<<< Updated upstream
const bodyParser = require('body-parser');
=======
const fs = require('fs')
const http = require('http')
const https = require('https')
>>>>>>> Stashed changes
const express = require('express');

let useHttps = true;

let credentials = {}

try {
    const privateKey = fs.readFileSync('certs/selfsigned.key', 'utf8');
    const certificate = fs.readFileSync('certs/selfsigned.crt', 'utf8');
    credentials = {key: privateKey, cert: certificate};
} catch (e) {
    useHttps = false;
}

const app = express();

const httpPort = 80;
const httpsPort = 443;

app.get('/', function (req, res) {
    console.log("Request received from " + req.ip);
    if(testCase()) {
        res.sendFile('static/index.html', {root: __dirname});
    } else {
        res.sendFile('static/indexFailed.html', {root: __dirname});
    }
})

const httpServer = http.createServer(app);

httpServer.listen(httpPort, () => {
    console.log("Now listening on port: " + httpPort);
})

if (useHttps) {
    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(httpsPort, () => {
        console.log("Now listening on port: " + httpsPort)
    })
}

