const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  
  //SE A MENSAGEM INICIA COM O CARATER !
  if (message.content.indexOf('!') === 0) {
  //LE A MENSAGEM EXCLUINDO O !
     var text = message.content.substring(1);
    
    message.reply(text);
    
  
    
    
  }   
    
});



client.login(process.env.BOT_TOKEN);
