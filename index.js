const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "+";

client.on("message", msg => {
  
   

   var regra="Mod"
  
  
 //  let role = msg.guild.roles.find("name", regra);
  
   
  
 if (msg.content.startsWith('👍')) {
   let raidcanal=msg.channel.name;
   
    let role = msg.guild.roles.find("name", raidcanal);
   
   msg.reply("canal raid "+raidcanal);
   msg.reply(msg.author);
   msg.guild.members.get(msg.author.id).addRole(role);
     
     // msg.reply(msg.channel.name);//nome do canal onde esta
  }     
  
  
  
  
  
  if (msg.content.startsWith('👎')) {
    var raidcanal=msg.channel.name;
    let role = msg.guild.roles.find("name", raidcanal);
    msg.reply(msg.author);
    msg.guild.members.get(msg.author.id).removeRole(role);
     
      
  }     

//lista todos os elementos que tem a regra
  if (msg.content.startsWith('m')) {
    var raidcanal=msg.channel.name;
    let role = msg.guild.roles.find("name", raidcanal);
    
    let vairaid = msg.guild.roles.get(role.id).members; //quantidade de users

    
    let membersWithRole = msg.guild.members.filter(member => { 
        return member.roles.find("name", raidcanal);
    }).map(member => {
        return member.user;
    })


    msg.channel.send(role+"\n"+membersWithRole.join("\n"));
 
  } 
  
  
  
  
  
  
 if (msg.content.startsWith('%c')) { 
  let canal = msg.content.split(" ").slice(1).join(" ")
  msg.reply(canal)
   
      msg.guild.createChannel(canal, "text");
     msg.guild.createRole({name:canal}) ;
  

}


});













client.login(process.env.BOT_TOKEN);
