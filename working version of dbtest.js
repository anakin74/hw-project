//axios get request om waarden op te halen
//waarden gaan in variabelen
//met de variabelen maken we een ObjectID
//object plaatsen we in mongo

const axios = require('axios');

var hwsensorUrl = ('http://192.168.2.245/poffertjespan/get-sensors');

//ik gebruik hier de setinterval methode om elke 5 seconden een functie uit te laten voeren.

setInterval(() => {
  axios.get(hwsensorUrl).then((response) => {
    console.log(response.data.response.thermometers[0].te);
  });
}, 5000);
