require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
const authMiddleware = require('./middleware/authMiddleware')

// Middleware Functions

server.use(cors({
    origin: '*',
    credentials: true
}));
server.use(express.json());
server.use(authMiddleware)


server.get('/', (req, res) => {
    res.send(`<h1>Server is running</h1>`)
})






module.exports = server;



