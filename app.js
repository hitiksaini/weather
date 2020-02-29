const express = require('express');
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})
app.post("/", function(req, res) {
  const apikey = "b38950036dda646ed38ef4ea8a596b7a";
  const city = req.body.cityName;
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + apikey + "&units="+ unit;

  https.get(url, function(response) {
    console.log(response.statusCode); //this gives the output into hyper terminal

    response.on("data", function(data) {

      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp
      const temp1= weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const image_url = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"

      res.write("<h1>Temprature in " + city +" is " + temp +" celsius</h1>");
      res.write("<p> weather description : " +temp1 + "</p>");
      res.write("<img src="+ image_url + ">");

      res.send();
    })
  })
})

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
})
