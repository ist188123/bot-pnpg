

const Discord = require('discord.js');
const client = new Discord.Client();
 




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});















client.on('message', msg => {
  
 
 
 
 
 

	
function ev(vai){
	
	
	var local="";
	var divide=vai.split(" ");
	var metecor="";
	
	   
for (var i=0 ; i< divide.length-1 ; i++){
	metecor="";
	
	client.fetchUser(divide[i]);
	//if(divide[i].roles.some(r=>["Dev", "Mod", "Server Staff", "Proficient"].includes(r.name)) ) {
	//metecor="ddd";
	//}
	
   local=local+"\n"+divide[i]+client.fetchUser(divide[i]);
   
}
		
 
 const valor = client.emojis.find("name", "valor");
 
 const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",local )
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

  msg.channel.send({embed});
 
 
 
 
}

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 		   
		  var obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem);
    }
};
 
 
 
 if (msg.content.startsWith('!')) {

  var coisa="\:poop: @jcpjorge @Damasc010 <:valor:460526619124039691>@sira SDamac022<:valor:460526619124039691> @Damasc010 <:valor:460526619124039691>"
  
  
  
// Check if they have one of many roles
if(msg.member.roles.some(r=>["Dev", "Mod", "Server Staff", "Proficient"].includes(r.name)) ) {

 
 ev("@manuel @Damasc010 @sira SDamac022 @Damasc010");
} else {
  // has none of the roles
 msg.reply("no");
}
  
  
 }
 
 
 
 
 
});






client.login(process.env.BOT_TOKEN);
