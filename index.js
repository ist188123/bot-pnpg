
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
      
	    
	 msgnew.trim().split('@');
       
       
    const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://exraidspinhalnovo.webnode.pt/_files/200000025-adf2daee85/450/Pryce.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "https://exraidspinhalnovo.webnode.pt/_files/200000025-adf2daee85/450/Pryce.png")
  .setImage("https://exraidspinhalnovo.webnode.pt/_files/200000025-adf2daee85/450/Pryce.png")
  .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/200000025-adf2daee85/450/Pryce.png")
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
     .addField("Inline Field", "They \tcan \talso be\t inline.", true)
     
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true)
	    .addField("Inline Field 3", "You can have a maximum of 25 fields.", true)
	    .addField("Inline Field 3", "You can have a maximum of 25 fields.", true)
	
	    .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
	    

  message.channel.send({embed});
      
    }
    
    
	  
	  
	  
	  
	  
	  
	  
	   if (message.content.startsWith('!')) {
         
		   
		   var nomes="";
	
	          var history = [];
 
  message.channel.fetchMessages({
      limit: 10
  })
  .then(messages => {
	    messages.forEach( (item, key, map) => {
          
          history.push(item.toString());
          // Fetch 100 (the limit) messages and push them to an array called history
       
      });   
	
     
      });   
     
		   
	 	   
	 message.channel.send(history); 	   
		   
        
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
