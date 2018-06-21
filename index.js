const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const sendMessage = (msg, cb) => {
		client.emit('message', msg, cb);
	};


client.on('message', msg => {
  
  //SE A MENSAGEM INICIA COM O CARATER !
  if (msg.content.indexOf('!') === 0) {
  //LE A MENSAGEM EXCLUINDO O !
     var text = msg.content.substring(1);
    
    msg.reply(text);
    
  sendMessage(msg, (result) => {
				assert(result.indexOf('FUTURE SIGHT damage against Venusaur\nLv20:   103') > -1);
				assert(result.match(/damage against/g).length >= 3);
				done();
			});

    
    
  }   
    
});



client.login(process.env.BOT_TOKEN);
