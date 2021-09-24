// index2.js

const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = (passTimes) => {
  for (let pass of passTimes) {
    let days = new Date(0);
    days.setUTCSeconds(pass.risetime);
    let duration = pass.duration;
    console.log(`Next pass at ${days} for ${duration} seconds`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });