const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=663629892ed1bcb44d182c33bafdbd30&query=4.501410,114.015678';

request(url, (error: Error, response: any) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
