const request = require("request");

const geocode = (address, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=258cd3e3613870c3ba4bd35f20523750&query=" +
    encodeURIComponent(address);
  // console.log(url);
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.location.lat,
        longitude: body.location.lon,
        location: body.request.query,
      });
    }
  });
};

module.exports = geocode;
