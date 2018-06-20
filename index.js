const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ola') {
    msg.reply('ola, quere marcar uma RAID?');
  }
  if (msg.content === 'sim') {
    msg.reply('Qual o tipo de RAID?');
  }
});


client.login(process.env.BOT_TOKEN);
