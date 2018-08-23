const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "+";

var url = "http://api.openweathermap.org/data/2.5/weather?q=pinhal novo,uk&appid=e5b13f9f228fb556488b01e0cb51be00"

var request = require("request")

 client.on("message", async (msg) => {
     
     if (msg.channel.name.startsWith('!xpto')) {

var jsonData = require('./users.json');
msg.reply(jsonData.RAIDS);
     }
     
     
     
});
        

client.login(process.env.BOT_TOKEN);
