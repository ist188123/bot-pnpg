const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "+";

client.on("message", msg => {
  
   
    
 // msg.react('👍').then(() => msg.react('👎'));


    
    
    
    
  //  if(msg.react('👍')){
    
  //   msg.reply('you reacted with a thumbs up.');
    
  //  }
   //  msg.guild.createRole({name:'xpto-file'})
    
  msg.channel.fetchMessages({limit :100 }).then(msg=> {


        msg.forEach(msg=>{
            if(msg.content.startsWith('!fou')){
                msg.reply(msg.author);
            }
          
        })
       

    })
    
  
  
   let role = msg.guild.roles.find("name", "Mod");
  
  
if (msg.content.startsWith('!vou')) {
    msg.reply(msg.author);
    msg.author.addRole(role) 
      
     
      
  }       
  
  if (msg.content.startsWith('!n')) {
    let member=msg.author.id;
    member.removeRole(role)
    msg.reply(msg.author.id);
    
}       
  
  
  
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
















client.login(process.env.BOT_TOKEN);
