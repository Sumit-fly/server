const http = require('http');
const mongoose = require('mongoose');
const { mongoConnecet } = require('./services/mongo');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer() {
  await mongoConnecet();
  await loadPlanetsData();
  await loadLaunchData();
}

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

startServer();
