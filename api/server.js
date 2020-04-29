const express = require('express');
const configureMiddleware = require('./configure-middleware')

const authRouter = require('../auth/auth-router')

const server = express();

configureMiddleware(server);

server.use('/auth', authRouter)

server.get('/', (req, res) => {
    res.send("It's alive!");
  });

module.exports = server;