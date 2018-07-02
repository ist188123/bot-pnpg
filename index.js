
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
    
    
    var bicho="";
    //----
    
    
    
   
  
     if (message.content.startsWith('!')) {
   
      var braid="https://exraidspinhalnovo.webnode.pt/_files/200000025-adf2daee85/450/Pryce.png"
      var ovo="https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png"
       
      var bicho=message.content.split("!")
       
       
         message.guild.channels.find("name", "ddd").sendMessage(bicho);
      
      
      
       if(bicho[0]=='hoho'){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000015-2acec2bcfd/200/ohoh.jpg"
       }
       
       if(bicho[1]==5){
         ovo="https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png"
         
         
       }
       
      
       
       
    const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", ovo)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", braid)
  .setImage("https://drive.google.com/open?id=1pQB0L358QJ5cgF9bBJjby67t4Bpegebe")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
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
