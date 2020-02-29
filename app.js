var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};





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
    console.log(response.statusCode);






var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

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

        req.on('end', function() {
            if (req.url === '/') {
                log('Received message: ' + body);
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
            }

            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            res.end();
        });
    } else {
        res.writeHead(200);
        res.write(html);
        res.end();
    }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
