const Discord = require("discord.js");

const client = new Discord.Client();
  const fs = require('fs');
const prefix = "+";
const config = require('student.json')




client.on("message", async (msg) => {

    

    //---------------------------------------------------	
    //informação 	
    //---------------------------------------------------	
    const responseObject = {
        "machamp": "Damasc010, Paulo Rosário!",
        "versão": "v3.01 de agosto 2018",
        "pn": "Pokemon go Pinhal Novo"
    };

    if (responseObject[msg.content]) {
        msg.channel.send(responseObject[msg.content]);

    }
    //---------------------------------------------------		
    //fim informacao
    //---------------------------------------------------		



    function myFunc(arg) {
        msg.guild.channels.find("name", arg).sendMessage("oi");
    }







        //apaga mensagem - retira da raid
        if (msg.content.startsWith('%')) {
            
msg.reply(config.token);
          


            
            
            

        }

    //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
