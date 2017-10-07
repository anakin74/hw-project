//file to get the temperature for amsterdam and store it in mongodb
//temp gaat nu nog naar console.log maar moet naar database

var getTemp = (a, b, callback) => {

  const request = require('request');

  request({
    url:'https://api.darksky.net/forecast/761817e0e8caa6051cd8d05a62114e0c/52.41337739999999,4.8872596?units=si',
    json: true,
  }, (error, response, body) => {
    if(error){
      // console.log('foutje');
      callback(error);
    } else if(response.statusCode === 200) {
      callback(undefined, body.currently.temperature);
    }
  });
};




module.exports.getTemp = getTemp;
