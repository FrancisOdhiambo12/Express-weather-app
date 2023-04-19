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

   })

   res.send("Server is up and running")
})