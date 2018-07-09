

const Discord = require('discord.js'); 
const client = new Discord.Client();


  
  client.on('message' , function(server, user) {
     user.addTo(server.roles.get("name", "bot-added-role"));
});








client.login(process.env.BOT_TOKEN);
