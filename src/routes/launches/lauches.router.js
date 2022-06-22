const express = require('express');
const {
  httpGetAllLaunches,
  httpAddnewLauch,
  httpAbortLaunch,
} = require('./lauches.controller');

const lauchesRouter = express.Router();

lauchesRouter.get('/', httpGetAllLaunches);
lauchesRouter.post('/', httpAddnewLauch);
lauchesRouter.delete('/:id', httpAbortLaunch);

module.exports = lauchesRouter;
