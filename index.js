const Discord = require("discord.js");

const client = new Discord.Client();


const prefix = "+";

client.on("message", msg => {
  
  if (msg.content.startsWith('!')) {
 
    
    
    
    
    
    
    let role = msg.guild.roles.find("name", "Mod");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = msg.mentions.members.first();

// or the person who made the command: let member = message.member;

// Add the role!
member.addRole(role);

    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }

});


client.login(process.env.BOT_TOKEN);
