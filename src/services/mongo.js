const mongoose = require('mongoose');

const MONGO_URL =
  'mongodb+srv://nasa-api:tIJT4h67LWRs61gV@nasacluster.urncd.mongodb.net/nasa?retryWrites=true&w=majority';

async function mongoConnecet() {
  mongoose.connect(MONGO_URL, async err => {
    if (err) throw err;
    console.log('connected to db');
  });
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnecet,
  mongoDisconnect,
};
