const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const colours = require("./colours.json");
const superagent = require("superagent")

const bot = new Discord.Client({disableEveryone: true});


bot.on('ready', async () => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("Friends", {type: "WATCHING"});
})

bot.login(process.env.BOT_TOKEN);
