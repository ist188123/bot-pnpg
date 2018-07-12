const Discord = require("discord.js");

const client = new Discord.Client();


const prefix = "+";

client.on("message", msg => {
  
  if (msg.content.startsWith('!')) {
  msg.reply("oi")
  }

});


client.login(process.env.BOT_TOKEN);
