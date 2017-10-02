//axios get request om waarden op te halen
//waarden gaan in variabelen
//met de variabelen maken we een ObjectID
//object plaatsen we in mongo

const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;

var hwsensorUrl = ('http://192.168.2.245/poffertjespan/get-sensors');

//ik gebruik hier de setinterval methode om elke 5 seconden een functie uit te laten voeren.

setInterval(() => { //http request versturen en de temperatuur uit de response halen
  axios.get(hwsensorUrl).then((response) => {
    console.log(response.data.response.thermometers[0].te);
  });

  MongoClient.connect('mongodb://localhost:27017/HomeWizard', (err, db) => { //verbinding maken met de database
      if(err) {
        return console.log('Foutje'); //als dat niet lukt, foutmelding tonen
      }
    console.log('verbonden met de database'); //lukt het wel, dan succes melden
  });

  //Hier komt de code die de waarde naar de database gaat schrijven

}, 5000); //timeout value
