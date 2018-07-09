

const Discord = require('discord.js');
const client = new Discord.Client();
 




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message', msg => {
  
 
 if (msg.content.startsWith('!')) {

  
 msg.reply('Invalid command')
  .then(msg => {
    msg.delete(10000)
  })
  
 }
 
 
 
 
 
});






client.login(process.env.BOT_TOKEN);
