const axios = require('axios');

var hwswitchesUrl = ('http://192.168.2.245/poffertjespan/swlist');     //URL voor onze homewizard



//get list of switches
axios.get(hwswitchesUrl).then((response) => {
  console.log(response);
});
