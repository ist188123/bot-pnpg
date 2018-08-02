const Discord = require("discord.js");

const client = new Discord.Client();


const prefix = "+";

client.on("message", msg => {
  
   let role = msg.guild.roles.find("name", "Mod");
  
  
  
  

  
  
  
  
  
  if (msg.content.startsWith('!in')) {
 
    
   // msg.channel.send("Hello " + msg.author.toString() + ", inserido na raid!");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = msg.mentions.members.first();
   
// or the person who made the command: let member = message.member;

// Add the role!
member.addRole(role);
  }
    
  
  
  
  if (msg.content.startsWith('!out')) { 
  
    let member = msg.mentions.members.first();
    
 
    member.removeRole(role)
   
    
     var mentionmembers = msg.mentions.members.first()
     var mentionusers = msg.mentions.users.first()
     var embed = new Discord.RichEmbed()
                    embed.setColor("#940000")
                    embed.setAuthor("Avatar", "https://cdn.discordapp.com/attachments/347288279357456387/351084610500689940/pxavatar.png")
                    embed.setDescription(mentionusers.username + "'s current avatar")
                    embed.setImage(mentionusers.displayAvatarURL)
                    embed.setFooter("Requested by " + msg.author.tag, msg.author.displayAvatarURL)
                    embed.setTimestamp()
                msg.channel.send({embed})
    
    
    
    
    
    
    
  
    
  }
    
    
    //.----
  
  
  
  //-----
    
    


});






client.on('messageReactionAdd', (reaction, user) => {
	var msg = reaction.message;
	
		
			
			
				var letter = unicode[letters.indexOf(reaction.emoji.name)];
				
				reaction.fetchUsers().then(usrs => {
          var reactors = usrs.array();
          msg.send(usrs.name);
				
				});
				

	
});
  
















client.login(process.env.BOT_TOKEN);
