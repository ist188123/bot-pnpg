

const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
const prefix = "+";

client.on("message", msg => {
  
  
  msg.reply("oi")


});


client.login(process.env.BOT_TOKEN);
