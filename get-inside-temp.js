//file to connect to homewizard and fetch inside temperature

var getInsideTemp = (callback) => {
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
        temp:body.response.thermometers[0].te
      });
    }
  });
};




module.exports.getInsideTemp = getInsideTemp;
