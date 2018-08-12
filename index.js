const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "+";





client.on("message", async (msg) => {

    

    //---------------------------------------------------	
    //informação 	
    //---------------------------------------------------	
    const responseObject = {
        "autor": "Damasc010, Paulo Rosário!",
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
        if (msg.content.startsWith('!oi')) {
            

            const fs = require('fs');

fs.readFile('student.json', (err, data) => {  
    if (err) throw err;
    let student = JSON.parse(data);
    msg.reply(student);
});
            
            
            
            
            
            
            

        }

    //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
