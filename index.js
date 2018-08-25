const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "+";





client.on("message", async (msg) => {
    
        if (msg.content.startsWith('!')) {
            
            
            var x=msg.content.substring(1);
msg.reply(x)
           
        }
   

});

client.login(process.env.BOT_TOKEN);
