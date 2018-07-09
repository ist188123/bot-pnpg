

const Discord = require('discord.js'); 
const client = new Discord.Client();


  
client.on('message', (message) => {
  
  
  
  
if(message.content.startsWith('!recrutar')) {

  
   message.replay("sadasd");
}



});






client.login(process.env.BOT_TOKEN);
