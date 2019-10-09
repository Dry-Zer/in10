const Discord = require ("discord.js");

var PREFIX = "n!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("10 INVITES = NITRO");
    console.log("le bot a bien ete connecte");
    
});

bot.on("message", async function (message) {
if(message.author.equals(bot.user)) return;

if(!message.content.startsWith(PREFIX)) return

var args = message.contant.substring(PREFIX.length).split(" ");

switch(args[0].tolowerCase()) {
    case "invite":
    message.channel.send("Oh, Un jolie petit cadeau !", {
        embed: {
            color: 0xFF0000,
            author: message.author.name,
            title: '',
            fields: [{
                name: "Lien d'invitation Discord",
                value: "https://discord.gg/jUPXEjX",
                inline: false
                
            }],
            footer: {
                footer: "Partagez à fond !",
            },
        }
    });
    break;
}
});

bot.login("NjMwNDQxMzYwNjQxNjIyMDI2.XZ3WJQ.WLMeZ2LKCSUeq9z7HtVNIGtoDrQ");
