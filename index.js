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
 
    msg.reply(text +'\n' +
	      msg.channel.name+'\n'+
	     'For raids, use **!raid boss timeLeft location**\n' +
				'For eggs, use **!egg tierNumber timeLeft location**\n' +
				'For quests, use **!quest reward task location**\n' +
				'For wild spawns, use **!wild pokemonName location**\n' );
  }   
 
	
	
	
	
		
	}
});



client.login(process.env.BOT_TOKEN);
