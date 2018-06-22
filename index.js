const Discord = require('discord.js');
const client = new Discord.Client();

 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
  
	
if (msg.channel.name == 'raids-marcacao') {
		

	
  //SE A MENSAGEM INICIA COM O CARATER !
 // if (msg.content.indexOf('!') === 0) {
	  

	  
	  if(msg.content.startsWith("!5")){
	  
	
		  
		  
		  
  //LE A MENSAGEM EXCLUINDO O !
     var text = msg.content.substring(1);
 
		  var canal='RAID'+text
	//cria canal
		  if(msg.guild.channels.find("name", canal)){
		  }else{
			  
	msg.guild.createChannel(canal, "text");
		  }	  
		  
		  
		  
	msg.guild.channels.find("name",canal).send("Welcome!")	  
		  
		  
	  
   text='RAID '+text	  
	  
    //inicio mensagem
   const embed = new Discord.RichEmbed()
  .setTitle(text.substr(text.indexOf('!')+1))
  .setAuthor(text.substr(0,text.indexOf('!')-1), "https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("")
  .setFooter("PG pinhal novo, pubicado :", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
 // .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/200000018-6874a696da/450/regice.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Niveis CP",
   "1682 - 1764 / 2103-2205 Nuvens(cloudy)\n\n")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Treinadores:", "Damas010\nSDamasc022.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("\n\n\n\n\n\Fraco contra:", "Entei (Fire Spin/Overheat)\n" +
"Moltres (Fire Spin/Overheat)\n" +
"Charizard (Fire Spin/Blast Burn)\n" +
"Flareon (Fire Spin/Overheat)\n" +
"Ho-Oh (Steel Wing/Fire Blast)\n" +
"Machamp (Counter/Dynamic Punch)\n" +
"Tyranitar (Smack Down/Stone Edge)\n" +
"Blaziken (Counter/Overheat)\n" +
"Breloom (Counter/Dynamic Punch)", true);  
   msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage({embed});	  
	  
	  
	  
	  
  }   // fim do inicio carater
 
	
	
		
	}
});



client.login(process.env.BOT_TOKEN);
