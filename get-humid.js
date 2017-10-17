//file to connect to homewizard and fetch the humidity of the livingroom

var getInsideHum = (callback) => {
  const request = require('request');

  request({
    url:'http://192.168.2.245/poffertjespan/get-sensors',
    json: true,
  }, (error, response, body) => {
    if(error){
      // console.log('foutje');
      callback(error);
    } else if(response.statusCode === 200) {
      callback(undefined,{
        humidity:body.response.thermometers[0].hu
      });
    }
  });
};

module.exports.getInsideHum = getInsideHum;
