const { log } = require("console")
const express = require("express")
const https = require("https")

const app = express()

const PORT = process.env.PORT || 4000

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server running on port ${PORT}`)
    }
    else {
        console.log("Error occurred, server can't start", error);
    }
})

app.get("/", function(req, res){
     
   const url = "https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=5698dfd19571db238b85e90164e5243c&units=metrics&"
   
   https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data) {
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp
        const weatherDescription = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        res.write("<p>The weather in Nairobi is " + weatherDescription + ".</p>")
        res.write("<h1>The temperature in Nairobi is " + temp + " degrees celcius.</h1>")
        res.write("<img src=" + imageURL + "/>")
        res.send()

    })
   })
})