const express = require('express');
const planetsRouter = require('./planets/planets.router');
const lauchesRouter = require('./launches/lauches.router');

const api = express.Router();
api.use('/launches', lauchesRouter);
api.use('/planets', planetsRouter);

module.exports = api;
