const Discord = require('discord.js');
const client = new Discord.Client();

 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
  
	
if (msg.channel.name == 'raids-marcacao') {
		

	
  //SE A MENSAGEM INICIA COM O CARATER !
  if (msg.content.indexOf('!') === 0) {
	  
	  
  //LE A MENSAGEM EXCLUINDO O !
     var text = msg.content.substring(1);
 
	  
   text='**RAID '+text+'**'	  
	  
    
      // msg.reply(text);
	msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage(text);
	//msg.channel.fetchMessage();
  
  const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor(text, "https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/200000018-6874a696da/450/regice.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 1024 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

  msg.channel.send({embed});
	  
	  
	  
	  
	  
  }   // fim do inicio carater
 
	
	
		
	}
});



client.login(process.env.BOT_TOKEN);
