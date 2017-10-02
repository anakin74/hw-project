//app om iets met de homewizard te doen

const express = require('express');
const axios = require('axios');
const hbs = require('hbs');
const MongoClient = require('mongodb').MongoClient;

var hwsensorUrl = ('http://192.168.2.245/poffertjespan/get-sensors');     //URL voor onze homewizard
var hwswitchesUrl = ('http://192.168.2.245/poffertjespan/swlist');     //URL voor onze homewizard

var app = express();  //create appserver

app.use(express.static(__dirname + '/public'));

app.get('/about', (req, res) => {
  res.send('<p>This website is used for stuff related to the Homewizard</p>'); //route naar about page
});

app.get('/hw', (req, res) => { //route naar homewizard page

  axios.get(hwsensorUrl).then((response) => { //eerst met een axios.get request de data ophalen van de sensors
    res.render('hw.hbs', { //dan die data tonen via handlebars templates
      currentTemp: response.data.response.thermometers[0].te,
      humidity: response.data.response.thermometers[0].hu,
      daytotal: response.data.response.energylinks[0].s1.dayTotal * 1000,
      currentYear: new Date().getFullYear(),
      lastUpdateTime: new Date()
    })
    });
});





app.listen(4000, () =>{ //appserver starten
  console.log('Server is up on port 4000');
});

module.exports.app = app;


//connect to the mongo database server
MongoClient.connect('mongodb://localhost:27017/Tempdata', (err, db) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }

  console.log('Connected to mongodb server');
//connect to the mongo database server
