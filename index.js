const aoijs = require('aoi.js');

 const bot = new aoijs.Bot({
   token: "Your Bot Token",
   prefix: "Bot Prefix",
   intents: "all"
 });

bot.onMessage() //enables bot to see messages (required for executing Commands)


