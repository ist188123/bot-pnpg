

const Discord = require('discord.js'); 
const client = new Discord.Client();

client.on('message', msg => {
  
  if (msg.content.startsWith('!')) {
  const guildMember = msg.member;
  guildMember.addRole('bot-added-role');


  }


});





client.login(process.env.BOT_TOKEN);
