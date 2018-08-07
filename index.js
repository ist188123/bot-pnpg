const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "+";

client.on("message", msg => {
  
   

   var regra="Mod"
  
  
 //  let role = msg.guild.roles.find("name", regra);
  
   
  
 if (msg.content.startsWith('👍')) {
   let raidcanal=msg.channel.name;
   
    let role = msg.guild.roles.find("name", raidcanal);
   
   
   msg.guild.members.get(msg.author.id).addRole(role);
     
   
   //msg.reply("canal raid "+raidcanal);
    msg.channel.send(raidcanal);
   msg.channel.send(msg.author.toString() + ", inserido na RAID!");
  setTimeout(function() {
      
       criaRaid(raidcanal); 
       }, 3000);
  
     // msg.reply(msg.channel.name);//nome do canal onde esta
  }     
  
  
  
  
  
  if (msg.content.startsWith('👎')) {
    var raidcanal=msg.channel.name;
    let role = msg.guild.roles.find("name", raidcanal);
    
    msg.guild.members.get(msg.author.id).removeRole(role);
     
      msg.channel.send(msg.author.toString() + ", retirado na RAID!");
    
    setTimeout(function() {
      
       criaRaid(raidcanal); 
       }, 3000);
  
  }     


  
  
  
 if (msg.content.startsWith('%c')) { 
  let canal = msg.content.split(" ").slice(1).join(" ")
  msg.reply(canal)
   
      msg.guild.createChannel(canal, "text");
     msg.guild.createRole({name:canal}) ;
  

}





//lista todos os elementos que tem a regra
 function criaRaid(canalRaid){
    var raidcanal=canalRaid;
    let role = msg.guild.roles.find("name", raidcanal);
    
    let vairaid = msg.guild.roles.get(role.id).members; //quantidade de users

    
    let membersWithRole = msg.guild.members.filter(member => { 
        return member.roles.find("name", raidcanal);
    }).map(member => {
        return member.user;
    })

    
    
    
    let  bicho="https://exraidspinhalnovo.webnode.pt/_files/200000030-050b3060a3/450/articune.png";
    let ovo="https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png";
    
   
     var tiporaid=raidcanal.substring(5,6);
			var titulo="RAID "+raidcanal.substr(5)
			var thoras=titulo.split("-")
			var horas=thoras[thoras.length-1]
	    y=thoras
      var local=""

     for (var i=0;i<y.length-1;i++){
         local=local+" "+y[i]
   
        }
   
   
   
   
   
   
   
   
   
   
   
    
   disparaRaid(raidcanal,membersWithRole.join("\n"),vairaid.size,ovo,bicho);
  //  msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage(msg.guild.channels.find("name", msg.channel.name)+"\n"+membersWithRole.join("\n"));
 
  } 
  
  
  



function disparaRaid(canal,treinadores,total,ovo,bicho){
  const embed = new Discord.RichEmbed()
   .setTitle("1200")
  .setAuthor("PARQUE INFANTIL", ovo)
  
   /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("")
  .setFooter("Equipa: PKG Pinhal Novo, pubicado :", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
 // .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail(bicho)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Niveis CP", "ss")
  /*
   * lista dos jogadores que vão RAID.
   */
  .addField("Treinadores : "+total, treinadores, true)
  /*
   * Blank field, useful to create some space.
   */
   
  .addBlankField(true)
  .addField("\n\n\n\n\n\Fraco contra:","ok", true);  
  
  msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage({embed});
 
  
}




});

client.login(process.env.BOT_TOKEN);
