

const Discord = require('discord.js'); 
const bot = new Discord.Client();

bot.on('message', (message) => {
  
  if (message.content.startsWith('!')) {
  const guildMember = message.member;
  guildMember.addRole('bot-added-role');


  }


});





client.login(process.env.BOT_TOKEN);
