const Discord = require("discord.js");

const client = new Discord.Client();






client.on('ready', () => console.log('Ready.'));

const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

client.on('raw', async ({ t: eventName, d: data }) => {
	if (!events.hasOwnProperty(eventName)) return;

	const channel = client.channels.get(data.channel_id);

	if (channel.messages.has(data.message_id)) return;

	const user = client.users.get(data.user_id);
	const message = await channel.messages.fetch(data.message_id);
	const reaction = message.reactions.get(data.emoji.id || data.emoji.name);

	client.emit(events[eventName], reaction, user);
});

client.on('messageReactionAdd', (reaction, user) => {
	console.log('Reaction added; current count:', reaction.count);
});

client.on('messageReactionRemove', (reaction, user) => {
	console.log('Reaction removed; current count:', reaction.count);
});

client.on('message', message => {
	if (message.content === '!react') {
		console.log('First reaction incoming.');
		message.react('🤔');
	}
});



























const prefix = "+";

client.on("message", msg => {
  
  
  
 
    
    
    
 // msg.react('👍').then(() => msg.react('👎'));


    
    
    
    
  //  if(msg.react('👍')){
    
  //   msg.reply('you reacted with a thumbs up.');
    
  //  }
    
    
    
    
    
    
  
  
  
  
   let role = msg.guild.roles.find("name", "Mod");
  
  
  
  
  
  
  if (msg.content.startsWith('!in')) {
 
   
   // msg.channel.send("Hello " + msg.author.toString() + ", inserido na raid!");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = msg.mentions.members.first();
   
// or the person who made the command: let member = message.member;

// Add the role!
member.addRole(role);
  }
    
  
  
  
  if (msg.content.startsWith('!out')) { 
  
    let member = msg.mentions.members.first();
    
 
    member.removeRole(role)
  
    
     var mentionmembers = msg.mentions.members.first()
     var mentionusers = msg.mentions.users.first()
     var embed = new Discord.RichEmbed()
                    embed.setColor("#940000")
                    embed.setAuthor("Avatar", "https://cdn.discordapp.com/attachments/347288279357456387/351084610500689940/pxavatar.png")
                    
                embed.setDescription(mentionusers.username + "'s current avatar")
                   embed.setImage(mentionusers.displayAvatarURL)
                    embed.setFooter("Requested by " + msg.author.tag, msg.author.displayAvatarURL)
                    embed.setTimestamp()
                msg.channel.send({embed})
    
    
    
    
    
    
    
  
    
  }
    
    
    //.----
  
  
  
  //-----
    
    


});



















client.login(process.env.BOT_TOKEN);
