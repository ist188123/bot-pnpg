const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "+";





client.on("message", async (msg) => {
    
        if (msg.content.startsWith('!')) {
            
            
            var x=msg.content.substring(1);
            x=x.substring(1);
              x=x.split(' ')
            
         //++++++   
            
            msg.reply(x[0]);
            
             msg.reply(x[1]);
            
            
            var jsonData = require('./xx.json');
msg.reply("aqui");

var tiporaid = x[0];
var bicho = x[1];
var braid = "";
var bosscp = "";
var ovo="";

var raids = jsonData.map(x => x)

var tamanhoFicheiro = Object.keys(raids).length;



switch (tiporaid) {

    case "3":
        ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
        braid = ovo;
        break;
    case "4":
        ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
        braid = ovo;
        break;
    case "5":
        ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png";
        braid = ovo;
        break;
}

//


msg.reply("ovo switch "+ovo);

//

for (var x = 0; x < tamanhoFicheiro; x++) {
   
    if (tiporaid==raids[x].nivel && bicho==raids[x].boss){
        ovo = raids[x].imagem;
        braid = raids[x].imagem;
        bosscp = raids[x].bosscp;
        cpvi = raids[x].cpiv + " " + raids[x].weather
        status = raids[x].fraco + "\n" + raids[x].status
    }
}




msg.reply("ovo "+ovo);
msg.reply("boss "+braid);
msg.reply("boss cp "+bosscp);

            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
//++++++++++++++++++++++++++
           
        }
   

});

client.login(process.env.BOT_TOKEN);
