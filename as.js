const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = '</';

bot.on('message', message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (msg === prefix + 'PING') {
        message.channel.send('PONG!');
        return;
    }

});

bot.on('ready', () => {
    console.log('WINGGGGGGG!');
});

bot.login(process.env.BOT_TOKEN);


const Discord = require('discord.js');
const client = new Discord.Client();






client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message', msg => {


	
	
	
	
	
	
	
	
	
	
//funcao


function criaRaid(ncanal,text,treinador){
  //inicio mensagem
	//var totaltreinadores=treinador.trim().split("@")
	//"!raid5 piscina !12h30".substring(1)
			var titulo="RAID 5 "+ncanal.substr(7)
			var thoras=titulo.split("-")
			var horas=thoras[thoras.length-1]
	y=thoras
var local=""

for (var i=0;i<y.length-1;i++){
   local=local+" "+y[i]
   
}

	
	 msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage("Utilize o canal para registo "+msg.guild.channels.find("name", msg.channel.name));	  
	
	
	
   const embed = new Discord.RichEmbed()
   .setTitle(":clock1: "+horas)
  .setAuthor(local.toUpperCase(), "https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png")
  
   /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("")
  .setFooter("PG pinhal novo, pubicado :", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
 // .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/200000018-6874a696da/450/regice.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Niveis CP",
   "1682 - 1764 / 2103-2205 Nuvens(cloudy)\n\n")
  /*
   * lista dos jogadores que vão RAID.
   */
  .addField("Treinadores:",treinador , true)
  /*
   * Blank field, useful to create some space.
   */
   
  .addBlankField(true)
  .addField("\n\n\n\n\n\Fraco contra:", "Entei (Fire Spin/Overheat)\n" +
"Moltres (Fire Spin/Overheat)\n" +
"Charizard (Fire Spin/Blast Burn)\n" +
"Flareon (Fire Spin/Overheat)\n" +
"Ho-Oh (Steel Wing/Fire Blast)\n" +
"Machamp (Counter/Dynamic Punch)\n" +
"Tyranitar (Smack Down/Stone Edge)\n" +
"Blaziken (Counter/Overheat)\n" +
"Breloom (Counter/Dynamic Punch)", true);  
   msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage({embed});	  
	




}



// fim funcao
function info(titulo){
	
	var vinformacao=titulo.split("!")
	
	
   const embed = new Discord.RichEmbed()
  .setTitle(vinformacao[2])
  .setAuthor(vinformacao[1], "https://exraidspinhalnovo.webnode.pt/_files/200000024-8e37d8f30a/450/Item_1403-2.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("")
  .setFooter("Informação partilhada :", "https://exraidspinhalnovo.webnode.pt/_files/200000023-29ab72ab0f/450/Mewtwo.png")
 
  .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/200000023-29ab72ab0f/450/Mewtwo.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("INFORMAÇÃO", vinformacao[3], true);

  msg.guild.channels.find("name", vinformacao[4]).sendMessage({embed})
	
	
	
	
	
}




if (msg.channel.name == 'adm-pg-pinhalnovo') {
	
	 if(msg.content.startsWith("!")){
	info(msg.content.toString())
	
	 }
	
}



 
	  
	function criacanal(nome){
		
		msg.guild.createChannel(nome, "text")
		criaRaid(nome,nome,"__VAGA[1]__\n"+msg.author.toString())
		msg.guild.channels.find("name", nome).sendMessage("__VAGA[1]__\n"+msg.author.toString())
		
		
	}
	
	
	
	
	
	
	
	 
 

	
	
	
	
	
	
	if (msg.channel.name.startsWith('_r')) {
		
		
		
		
		//if(msg.author.bot) return;
		
		//if(msg.content.startsWith("!")){
	      //  msg.guild.channels.find("name",msg.channel.name).sendMessage("Inserido na RAID :"+msg.author.toString());	
		
			//var mensagem=msg.author.toString()+msg.content.toString().substr(4)
		if(msg.content.startsWith("VAGA[1]")){	
	
			
			
		criaRaid(msg.channel.name,msg.channel.name,msg.content.toString())	
			
			
		//criaRaid(msg.channel.name,msg.content.toString())	
		}	
		//}//fim if
	    
    //msg.guild.channels.find("name",msg.channel.name).sendMessage("**Trenadores registados na RAID**\n"+msg.content.toString());
	
	}//msg.channel.name
	
	
	
	
if (msg.channel.name == 'raids-marcacao') {
		

	
 
	  
	  if(msg.content.startsWith("!5")){
	  
	
		   msg.reply('Invalid command')
  .then(msg => {
    msg.delete(1000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
	
		 
	//message.channel.sendMessage	  
  //LE A MENSAGEM EXCLUINDO O !
     var text = msg.content.substring(1);
 
		  var canal='_r'+text
		  canal=canal.split('!').join('').toLowerCase();
		 var nomecanal=canal.split(' ').join('-').toLowerCase();
	//cria canal
		  if(msg.guild.channels.find("name", nomecanal  )){
		  }else{
			  
	
		criacanal(nomecanal)
		
	
  
	//msg.guild.channels.find("name", nomecanal).sendMessage("Vaga[1]");			
	msg.channel.sendMessage("Vaga[1]"+canal.split(' ').join('-'))
			  //msg.channels.get(canal.split(' ').join('-')).send('My Message');
		  }	  
		  
		//var refcanal=refcanal.concat("#",nomecanal) 
		 //msg.guild.channels.find("name", canal.split(' ').join('-')).sendMessage("sdfsdfsadfd");	 
	        
		 
		  //msg.guild.channels.find("name", canal.split(' ').join('-')).sendMessage("sdfsdfsadfd");
	  
   text='RAID '+text	  
	var refcanal="";
		  
    
	  
	  
	  
  }   // fim do inicio carater
 
	
	
		
	}
});









client.login(process.env.BOT_TOKEN);
