const dotenv = require('dotenv');
dotenv.config();
const axios = require("axios");
const API_KEY = process.env.API_KEY;
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.text());
const cors = require("cors");
app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})

app.get("/sentiment", function(req, res) {

    const baseUrl = `https://api.meaningcloud.com/sentiment-2.1`;
    const params = {
        key: API_KEY,
        lang: "en",
        txt: req.query.text,
    };

    axios({
            url: baseUrl,
            method: "post",
            params: params,
        })
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

app.post("/check", async(req, res) => {
    const resp = await fetch(`${baseUrl}${API_KEY}&lang=auto&url=${req.body}`);

    try {
        const data = await resp.json();
        res.send(data);
    } catch (err) {
        console.log("error", err);
    }
});