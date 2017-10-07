const startup = require('./get-temp.js');
var  a, b =1;

setInterval(() => {
  startup.getTemp(a,b,(errorMessage, results) => {
    if(errorMessage){
      console.log(errorMessage);
    } else {
      console.log(results);
    }
  });
},5000);
