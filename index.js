const Discord = require("discord.js");

const client = new Discord.Client();

let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
const prefix = "+";

client.on("message", msg => {
  
  if (msg.content.startsWith('!')) {
  msg.reply("oi")
  }

});


client.login(process.env.BOT_TOKEN);
