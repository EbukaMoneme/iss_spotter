// index.js
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
  
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('99.250.158.241', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', coords);
  
// });

// fetchISSFlyOverTimes({ latitude: 43.4103, longitude: -80.5038 }, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', passTimes);
// });
const printRiseTimes = (riseTimes) => {
  for (let rise of riseTimes) {
    let days = new Date(0);
    days.setUTCSeconds(rise.risetime);
    let duration = rise.duration;
    console.log(`Next pass at ${days} for ${duration} seconds`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printRiseTimes(passTimes);
});