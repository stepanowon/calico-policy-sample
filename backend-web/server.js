'use strict';

const express = require('express');
const os = require('os');

const PORT = 8080;
const HOST = '0.0.0.0';

const resObj = [
    { country: "japan", region: "asia", visited: true },
    { country: "laos", region: "asia", visited: false },
    { country: "france", region: "europe", visited: false },
    { country: "spain", region: "europe", visited: true },
    { country: "egypt", region: "africa", visited: false },
    { country: "morocco", region: "africa", visited: true },
]

const app = express();
app.get('/', (req,res)=> {
    return res.status(200).send(`
        <h2>backend-web sample</h2>
        <hr />
        <ul>
           <li> GET /countries</li>
        </ul>
    `)
})
app.get('/countries', (req, res) => {
    console.log("GET /countries")
    res.json(resObj);
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);