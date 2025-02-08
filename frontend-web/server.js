'use strict';

const express = require('express');
const axios = require('axios');
const os = require('os');
// 
const PORT = 8000;
const HOST = '0.0.0.0';
 
const app = express();

const backendURL = "http://backend-web.default.svc:8080/countries";
//const backendURL = "http://localhost:8080/countries";

const requestBackend = async () =>{
   const response = await axios.get(backendURL);
   return response.data;
}

app.get('/', async (req, res) => {
    const countries = await requestBackend();
    console.log(countries);
    let countriesString = "";
    countries.forEach(c => {
        countriesString += `<li>${c.country} - ${c.region} ${ c.visited ? "(visited)": "" } </li>`
    });

    return res.status(200).send(`
      <div>
        <h2>frontend-web sample</h2>
        <hr />
        <ul>
            ${countriesString}
        </ul>
      </div>
    `);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

