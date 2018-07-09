

const Discord = require('discord.js'); 
const client = new Discord.Client();


  
 client.on('message', msg => {
   
   
   
     msg.author.addTo(client.roles.get("name", "bot-added-role"));
});








client.login(process.env.BOT_TOKEN);
