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

    
    
    
    let  braid="https://exraidspinhalnovo.webnode.pt/_files/200000030-050b3060a3/450/articune.png";
    let ovo="https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png";
    
    
   criaRaid(msg.channel.name,membersWithRole.join("\n"),vairaid.size,ovo);
  //  msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage(msg.guild.channels.find("name", msg.channel.name)+"\n"+membersWithRole.join("\n"));
 
  } 
  
  
  
  
  
  
 if (msg.content.startsWith('%c')) { 
  let canal = msg.content.split(" ").slice(1).join(" ")
  msg.reply(canal)
   
      msg.guild.createChannel(canal, "text");
     msg.guild.createRole({name:canal}) ;
  

}









function criaRaid(canal,treinadores,total,tier,braid){
  const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Treinadores : ",total)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
  
  
  
  msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage({embed});
 
  
}




});

client.login(process.env.BOT_TOKEN);
