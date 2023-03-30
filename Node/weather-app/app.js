const axios = require('axios');

/*
  //'http://api.weatherstack.com/current?access_key=7b24c16c74a4241ba153c6534ab76f7a&query=37.566536,126.977966';
const url =
  'http://api.weatherstack.com/current?access_key=7b24c16c74a4241ba153c6534ab76f7a&query=37.566536,126.977966';

axios({
  method: 'get',
  url: url,
  responseType: 'json',
})
  .then(function (response) {
    const data = response.data.current;
    const temperature = data.temperature;
    const chanceOfRain = data.precip;
    const feelsLike = data.feelslike;

    console.log('Today is ' + data.weather_descriptions[0] + ' day! It is currently ' + temperature + ' degrees out. It feels like ' 
      + feelsLike + ' degree out, and the chance of rain is ' + chanceOfRain + '%');
  })
  .catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  });
*/

 const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1Ijoib3BydjkwNSIsImEiOiJjbGdrNTZ6ZzYwNTJzM2dub2Z0cHV0dWl6In0.AQzVPA2QIPkFu0l7teHGCA';

axios({
  method: 'get',
  url: geocodeURL,
  responseType: 'json',
})
  .then(function (response) {
    const longitude = response.data.features[0].center[0];
    const latitude = response.data.features[0].center[1];
    console.log(latitude, longitude);
  }) 
  .catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  });

