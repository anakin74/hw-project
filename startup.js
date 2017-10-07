const startup = require('./get-temp.js');
const MongoClient = require('mongodb').MongoClient;

var  a, b =1;

setInterval(() => {
  startup.getTemp(a,b,(errorMessage, results) => {
    if(errorMessage){
      console.log(errorMessage);
    } else {
      console.log(results.time); //hier connectie naar de database maken
      MongoClient.connect('mongodb://localhost:27017/HomeWizard', (err, db) => { //verbinding maken met de database
          if(err) {
            return console.log('Foutje');//als dat niet lukt, foutmelding tonen
          }
          db.collection('homewizard').insertOne({
            tijd: results.time,
            temp: results.temp
          })
          db.close();
        });
      };
    });
  },300000);
