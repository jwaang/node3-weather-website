const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=258cd3e3613870c3ba4bd35f20523750&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";
  // console.log(url);
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(
        undefined,
        // weather: body.current.weather_descriptions,
        // temperature: body.current.temperature,
        // precipitation: body.current.precip,
        `Currently it is ${body.current.weather_descriptions[0]}. The temperature is ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. There is a ${body.current.precip}% chance of rain. The humidity is ${body.current.humidity}%`
      );
    }
  });
};

module.exports = forecast;
