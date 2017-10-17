const request = require ('supertest');
const expect = require('expect');

var app = require('get-sensors.js').app;


it('Should be version 3.8', (done) => {
  request(app);
  get('/')
})
