
/*
  A bot to clear/delete messages of a channel
  Usage: !clearMessages  ==> clears all messages of
  that channel on which the command was run
*/

const CLEAR_MESSAGES = '!clearMessages';

const Discord = require('discord.js');
const bot = new Discord.Client();

// Token of my bot


bot.on('ready', () => {
  console.log('ClearMessagesBot is Ready!');
  bot.on('message', message => {
    
    
   
    //----
    function sendmsg(msgnew){
      
      var thoras=msgnew.split("!")
		
var bicho=thoras;
        //ovo 5
      var ovo="https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png";
       
	var braid=ovo;   
     
       
       
         message.guild.channels.find("name", "ddd").sendMessage(bicho[1]+" - "+bicho[2]);
      //------
	if(bicho[1].startsWith('5')){
        ovo=ovo;
       
        braid=ovo;    
	    
	  if(bicho[2].startsWith('ohoh')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000026-5ec255fb74/450/Ho-Oh.png";
       }
	    
	    
      if(bicho[2].startsWith('articune')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000030-050b3060a3/450/articune.png";
       }   
	     
	}//----    
	    
	    
	    
         
	    
	  //----  
     if(bicho[1].startsWith('4')){
        ovo="https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
       
        braid=ovo;
     
     if(bicho[2].startsWith('absol')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000028-3bf1a3ce89/450/apsol.png";
       }      
	      
	 if(bicho[2].startsWith('tyra')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000029-e0378e12f0/450/tyra.png";
       } 
     } //----  
	    
	  
	    
	    
	    
	    
	 //-----   
	if(bicho[1].startsWith('3')){
        ovo="https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
      
		braid=ovo;   
		
		//bicho
	if(bicho[2].startsWith('machamp')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000031-dcf97ddeea/450/pokemon_icon_068_00.png";
       }     
	}   
	//----     
	    
      
	
	    
	   
     
       
	
	
	    
      
      
       
      
       
       
    const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", ovo)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", braid)
  .setImage(braid)
  .setThumbnail(braid)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 2048 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

  message.channel.send({embed});
      
    }
    
    
   
  
     if (message.content.startsWith('!')) {
       
       sendmsg(message.content)
      
     }
    
    //----
    
    if (message.content == CLEAR_MESSAGES) {

      // Check the following permissions before deleting messages:
      //    1. Check if the user has enough permissions
      //    2. Check if I have the permission to execute the command

      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        return;
      }
  
     
      // Only delete messages if the channel type is TextChannel
      // DO NOT delete messages in DM Channel or Group DM Channel
      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
          message.channel.bulkDelete(messages);
       
            messagesDeleted = messages.array().length; // number of messages deleted

            // Logging the number of messages deleted on both the channel and console.
            message.channel.sendMessage("Deletion of messages successful. Total messages deleted: "+messages.author.toString());
            console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });
      }
    }
  });
});




bot.login(process.env.BOT_TOKEN);
