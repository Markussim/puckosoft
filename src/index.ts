const data = require("./puckosoft.json");
const token = require("./token.json")
const Discord = require("discord.js");
import fs from 'fs';

var client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg: any) => {
  // Check if the message starts with '!hello' and respond with 'world!' if it does.
  if (msg.author.bot) return;
  if (msg.content.toUpperCase().includes("PUCKO")) {
    msg.reply(puckosoftMaker());
  }

  if (msg.content.toUpperCase().includes("MICROSOFT")) {
    msg.reply("Det heter inte Microsoft, det heter Puckosoft");
  }
});

// client.login logs the bot in and sets it up for use. You'll enter your token here.
client.login(token.token);

function puckosoftMaker() {
  return (
    data[Math.floor(Math.random() * data.length)]
      .split("Microsoft")
      .join("Puckosoft")
      //.replace("Microsoft", "Puckosoft")
      .split("Windows")
      .join("Linux ripoff")
      //.replace("Windows", "Linux ripoff")
      .split("Apple")
      .join("Äpple")
      //.replace("Apple", "Äpple")
      .split("Android")
      .join("Fake linux for phones")
      //.replace("Android", "Fake linux for phones")
      .split("iOS")
      .join("Android for rich stupid people")
      //.replace("iOS", "Android for rich stupid people")
  );
}
