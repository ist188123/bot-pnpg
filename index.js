

const Discord = require('discord.js');
const client = new Discord.Client();
 




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message', msg => {
  
 
 if (msg.content.startsWith('!')) {

  
// Check if they have one of many roles
if(msg.member.roles.some(r=>["Dev", "Mod", "Server Staff", "Proficient"].includes(r.name)) ) {
 msg.reply("oi");
} else {
  // has none of the roles
 msg.reply("no");
}
  
  
 }
 
 
 
 
 
});






client.login(process.env.BOT_TOKEN);
