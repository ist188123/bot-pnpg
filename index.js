

const Discord = require('discord.js'); 
const client = new Discord.Client();


  
client.on('message', (message) => {
  
  
  let userToModify = message.mentions.users.first();
let roleToAdd = message.mentions.roles.first();
userToModify.addRole("bot-added-role");
  
  
if(message.content.startsWith('!recrutar')) {
message.member.addRole(roleToAdd);
}



});






client.login(process.env.BOT_TOKEN);
