const Discord = require("discord.js");

const client = new Discord.Client();

var jsonData = require('./raidspn.json');


 client.on("message", async (msg) => {
     
     if (msg.content.startsWith('!xpto')) {

//msg.reply("coisa");
//msg.reply(jsonData.RAIDS);
      
      
      var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e5b13f9f228fb556488b01e0cb51be00"

var request = require("request")

//var url = "http://developer.cumtd.com/api/v2.2/json/GetStop?" +
   // "key=d99803c970a04223998cabd90a741633" +
   // "&stop_id=it"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        msg.reply(body.weather[0]) // Print the json response
    }
})
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
     }
     
     
     
});
        

client.login(process.env.BOT_TOKEN);
