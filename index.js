const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "+";

client.on("message", msg => {
  
   

   var regra="Mod"
  let pkmraid="";
  
 //  let role = msg.guild.roles.find("name", regra);
  
    if (msg.content.startsWith('%')) {
   let raidcanal=msg.channel.name;
   
    let role = msg.guild.roles.find("name", raidcanal);
   
 pkmraid=msg.content.substring(1);
	
   setTimeout(function() {
      // msg.channel.send(bicho);
       criaRaid(raidcanal,pkmraid); 
       }, 2500);
  
     // msg.reply(msg.channel.name);//nome do canal onde esta
  }     
  
   
   
   
   
   
   
   
   
  
 if (msg.content.startsWith('👍')) {
   let raidcanal=msg.channel.name;
   
    let role = msg.guild.roles.find("name", raidcanal);
   
   
   msg.guild.members.get(msg.author.id).addRole(role);
     
	 
	
	msg.channel.fetchMessages({limit :100 }).then(msg=> {
      msg.forEach(msg=>{
            if(msg.content.startsWith('%')){
	       pkmraid= msg.content.substring(1);
              // msg.channel.send(bicho);
            }
          
        })
    }) 
	 
	 
   
   //msg.reply("canal raid "+raidcanal);
   
//   msg.channel.send(msg.author.toString() + ", inserido na RAID!");
  setTimeout(function() {
      // msg.channel.send(bicho);
       criaRaid(raidcanal,pkmraid); 
       }, 3000);
  
     // msg.reply(msg.channel.name);//nome do canal onde esta
  }     
  
  
  
  
  
  if (msg.content.startsWith('👎')) {
    var raidcanal=msg.channel.name;
    let role = msg.guild.roles.find("name", raidcanal);
    
    msg.guild.members.get(msg.author.id).removeRole(role);
     
    //  msg.channel.send(msg.author.toString() + ", retirado na RAID!");
    
	 
	msg.channel.fetchMessages({limit :100 }).then(msg=> {
      msg.forEach(msg=>{
            if(msg.content.startsWith('%')){
	       pkmraid= msg.content.substring(1);
              // msg.channel.send(bicho);
            }
          
        })
    })   
	  
	  
	  
    setTimeout(function() {
      
       criaRaid(raidcanal,pkmraid); 
       }, 2500);
  
  }     


	//--teste ---
	 if (msg.content.startsWith('-f')) { 
	
    
		 
		 
      msg.channel.fetchMessages({limit :100 }).then(msg=> {
      msg.forEach(msg=>{
            if(msg.content.startsWith('%')){
	      let pkmraid= msg.content.substring(1);
               //msg.channel.send(bicho);
            }
          
        })
    })
	 }
	//--fim teste --
  
  
  
 if (msg.content.startsWith('%c')) { 
  let canal = msg.content.split(" ").slice(1).join(" ")
  msg.reply(canal)
   
      msg.guild.createChannel(canal, "text");
     msg.guild.createRole({name:canal}) ;
  

}





//lista todos os elementos que tem a regra
 function criaRaid(canalRaid,bicho){
    var raidcanal=canalRaid;
    let role = msg.guild.roles.find("name", raidcanal);
    
    let vairaid = msg.guild.roles.get(role.id).members; //quantidade de users

    
    let membersWithRole = msg.guild.members.filter(member => { 
        return member.roles.find("name", raidcanal);
    }).map(member => {
        return member.user;
    })

    
        var status="?";
	var cpiv="?"
	
	var ovo="";
	var braid=ovo;
	//var bicho="";
    
    
    
   
     var tiporaid=raidcanal.substring(5,6);
     var titulo="RAID "+raidcanal.substr(5)
     var thoras=titulo.split("-")
     var horas=thoras[thoras.length-1]
     y=thoras
     var local=""

     for (var i=0;i<y.length-1;i++){
         local=local+" "+y[i]
   
        }
   
   
   
   //---- TIPO RAID ----
   
   if(tiporaid.startsWith('3')){
        ovo="https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
      
		braid=ovo;   
		
		//bicho
	if(bicho.startsWith('machamp')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000031-dcf97ddeea/450/pokemon_icon_068_00.png";
		cpiv="1574-1967 1650-2063"	
       }     
	}   
	//----     
	    
	
	
	
	
     if(tiporaid.startsWith('4')){
        ovo="https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
       
        braid=ovo;
    
	     
	if(bicho.startsWith('golem')){
         braid=" https://exraidspinhalnovo.webnode.pt/_files/200000037-85af786acf/450/golem.png";
	     cpiv="Nivel 20 CP 1666";
	    status="Duplo fraco contra WATER e GRASS\nKyogre Waterfall - Hydro Pump\nGyarados Waterfall - Hydro Pump\nGroudon Mud Shot - Solar Beam"
       }     
	     
	     
     if(bicho.startsWith('absol')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000028-3bf1a3ce89/450/apsol.png";
	     cpiv="1232-1303/1540-1629";
       }      
	      
	 if(bicho.startsWith('tyra')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000029-e0378e12f0/450/tyra.png";
       } 
     } //----  
	
	
	 //------
	if(tiporaid.startsWith('5')){
        ovo="https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png";
       
        braid=ovo;    
		
		
	
	
	if(bicho.startsWith('regis')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000035-0751e084bd/450/registeel.png";
	cpiv="1222-1292 / 1528-1615";
	status="Charizard with Overheat\nBlaziken FIRE\nTyphlosion - Overheat\nArcanine - Flamethrower\nSalamance - Fire Fang - Fire Blast\nHeracross - Combat\n";
       }	
		
		
		
	if(bicho.startsWith('regice')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000018-6874a696da/450/regice.png";
	cpiv="1682-1764 / 2103-2205";
		status="ENTEI\nMOLTRES\nCHARIZARD\nFLAREON\nHO-oh";
       }	
	    
	  if(bicho.startsWith('ohoh')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000026-5ec255fb74/450/Ho-Oh.png";
       }
	    
	    
      if(bicho.startsWith('articune')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000030-050b3060a3/450/articune.png";
       }   
	     
	}//----    
   
   
   
   //----  FIM TIPO RAID ---
   
    
   disparaRaid(local,horas,raidcanal,membersWithRole.join("\n"),vairaid.size,ovo,braid);
  //  msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage(msg.guild.channels.find("name", msg.channel.name)+"\n"+membersWithRole.join("\n"));
 
  } 
  
  
  



function disparaRaid(local,horas,canal,treinadores,total,ovo,bicho){
  const embed = new Discord.RichEmbed()
   .setTitle(horas)
  .setAuthor(local.toUpperCase(), ovo)
  
   /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("")
  .setFooter("Equipa: PKG Pinhal Novo, pubicado :", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
 // .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail(bicho)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Niveis CP", "ss")
  /*
   * lista dos jogadores que vão RAID.
   */
  .addField("Treinadores : "+total, treinadores, true)
  /*
   * Blank field, useful to create some space.
   */
   
  .addBlankField(true)
  .addField("\n\n\n\n\n\Fraco contra:","ok", true);  
  
  msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage({embed});
 
  
}




});

client.login(process.env.BOT_TOKEN);
