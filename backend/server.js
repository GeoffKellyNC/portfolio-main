require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();



server.use(express.json());


server.use(cors({
    origin: '*',
    credentials: true
}));




server.get('/', (req, res) => {
    res.send(`<h1>Server is running</h1>`)
})






module.exports = server;



