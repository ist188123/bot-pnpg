const Discord = require("discord.js");

const client = new Discord.Client();

var jsonData = require('./raidspn.json');


 client.on("message", async (msg) => {
     
     if (msg.channel.name.startsWith('!xpto')) {

msg.reply("coisa");
//msg.reply(jsonData.RAIDS);
     }
     
     
     
});
        

client.login(process.env.BOT_TOKEN);
