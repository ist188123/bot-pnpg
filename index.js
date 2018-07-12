const Discord = require("discord.js");

const client = new Discord.Client();


const prefix = "+";

client.on("message", msg => {
  
   let role = msg.guild.roles.find("name", "Mod");
  
  if (msg.content.startsWith('!in')) {
 
    
    
    
    
    
    


// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = msg.mentions.members.first();
   
// or the person who made the command: let member = message.member;

// Add the role!
member.addRole(role);
  }
    
  
  if (msg.content.startsWith('!out')) { 
  
    let member = msg.mentions.members.first();
    member.removeRole(role)
    
    
    
  }
    
    
    //.----
  
  if(msg.content.startsWith("//Mod")){
    let roleName = msg.content.split(" ").slice(1).join(" ");

    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their usernames
    let membersWithRole = msg.guild.members.filter(member => { 
        return member.roles.find("name", roleName);
    }).map(member => {
        return member.user.username;
    })

    let embed = new discord.RichEmbed({
        "title": `Users with the ${roleName} role`,
        "description": membersWithRole.join("\n"),
        "color": 0xFFFF
    });

    return msg.channel.send({embed});
}
  
  
  //-----
    
    


});


client.login(process.env.BOT_TOKEN);
