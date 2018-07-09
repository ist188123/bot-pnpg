

const Discord = require('discord.js'); 
const client = new Discord.Client();

client.on('message', msg => {
  
  if (msg.content.startsWith('!')) {
  

    let role = msg.guild.roles.find("name", "bot-added-role");
        msg.author.addRole(role);
    
    
    
    
    
    

  }


});





client.login(process.env.BOT_TOKEN);
