var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=412346957323dc68ce5ee55f7e5baef2';
//412346957323dc68ce5ee55f7e5baef2
module.exports = {
  getTemp : function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return new Promise(function(resolve,reject){
      axios.get(requestUrl).then(
        function(res){
          console.log(res);
          if(res.data.cod && res.data.message){
            reject(res.data.message);
          }
          else {
            resolve(res.data.main.temp);
          }
        },
        function(err){
          reject(err.data.message);
        });
    });
  }
};