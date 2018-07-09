

const Discord = require('discord.js');
const client = new Discord.Client();
 




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message', msg => {
  
 
 if (msg.content.startsWith('!')) {

  
channel.fetchMessages({ limit: 10 })
  .then(messages => console.log(`Received ${messages.size} messages`))
  .catch(console.error);
  
  
  
 }
 
 
 
 
 
});






client.login(process.env.BOT_TOKEN);
