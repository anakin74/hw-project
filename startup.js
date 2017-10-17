//main file for homewizard application.
//this file will connect to the homewizard on a schedul of 30seconds interval.
//the data is fetched via seperate files for the temperature, humidity and power
//this data comes back to this file and is then stored as a single object in the database via the writetodb file.
// At that moment, a timestamp is added.


 const outsidetemp = require('./get-temp.js');
 const insidetemp = require('./get-inside-temp.js');
 const insidehumidity = require('./get-humid.js');
 const solarpower = require('./get-solarpower.js');
// const MongoClient = require('mongodb').MongoClient;


setInterval(() => {

  //call naar inside temp

  insidetemp.getInsideTemp((errorMessage, results) => {
    if(errorMessage){
      console.log(errorMessage);
    } else {
      var binnentemp = results;
      console.log('Binnen is het: ',binnentemp, ' graden');
    };
  });
  //end call naar inside temp

  //call naar inside humidity

  insidehumidity.getInsideHum((errorMessage, results) => {
    if(errorMessage){
      console.log(errorMessage);
    } else {
      var binnenvochtigheid = results;
      console.log('De luchtvochtigheid is ',binnenvochtigheid, ' procent');
    }
  });
  //end call naar inside humidity

  //call naar solarpower

  solarpower.getSolarPower((errorMessage, results) => {
    if(errorMessage){
      console.log(errorMessage);
    } else {
      var opgewekte_energie = results;
      console.log('Op dit moment genereren de zonnepanelen:  ',opgewekte_energie, 'Watt');
    }
  });
  //end call naar solarpower

  

}, 5000); //interval
