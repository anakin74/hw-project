//module for connecting to the database and write the data that came back from data retrieval modules
const MongoClient = require('mongodb').MongoClient;

//console.log(results.time); //hier connectie naar de database maken
MongoClient.connect('mongodb://localhost:27017/HomeWizard', (err, db) => {
  if(err) {
    return console.log('Foutje');
  }

  db.collection('homewizard').insertOne({ //hier de data wegschrijven die als object binnenkomt
    tijd: results.time,
    temp: results.temp
  })
  db.close();
