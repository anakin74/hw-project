//file to connect to homewizard and fetch the amount of energy generated by the solar panels

var getSolarPower = (callback) => {
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
        humidity:body.response.energylinks[0].s1.dayTotal * 1000
      });
    }
  });
};

module.exports.getSolarPower = getSolarPower;
