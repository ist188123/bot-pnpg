const Discord = require("discord.js");

const client = new Discord.Client();

var jsonData = require('./raidspn.json');
var fs = require('fs')

 client.on("message", async (msg) => {
     
     if (msg.content.startsWith('!xpto')) {

//msg.reply("coisa");/
      msg.reply(jsonData.RAIDS._raid4.tyra.cpboss);
      
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
     }
     
     
     
});
        

client.login(process.env.BOT_TOKEN);
