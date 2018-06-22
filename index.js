const Discord = require('discord.js');
const client = new Discord.Client();

 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
  
	
if (msg.channel.name == 'raids-marcacao') {
		

	
  //SE A MENSAGEM INICIA COM O CARATER !
  if (msg.content.indexOf('>') === 0) {
	  
	  
  //LE A MENSAGEM EXCLUINDO O !
     var text = msg.content.substring(1);
 
	  
   text='RAID '+text	  
	  
    //inicio mensagem
        
const embed = new Discord.RichEmbed()
  .setTitle("12h30")
  .setAuthor(text, "https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("")
  .setFooter("Fim mensagem RAID pinhal novo.", "http://i.imgur.com/w1vhFSR.png")
 // .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/200000018-6874a696da/450/regice.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://www.google.com/maps/place/Pinhal+Novo/@38.6321418,-8.9198928,14.66z/data=!4m5!3m4!1s0xd19409858c24d63:0x500ebbde4910920!8m2!3d38.6318721!4d-8.9150933")
  .addField("TREINADORES PRESENTES", "Damasc010\nSDamasc022")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("", "", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("", "", true);

  msg.channel.send({embed});
	  
	  
	  
	  
	  
	  
  }   // fim do inicio carater
 
	
	
		
	}
});



client.login(process.env.BOT_TOKEN);
