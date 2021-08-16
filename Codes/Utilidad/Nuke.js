client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const args = message.content.trim().split(/ +/g);
const command = args.shift().toLowerCase();
let link = "https://cdn.discordapp.com/attachments/786627691267751976/787745289523691541/6c485efad8b910e5289fc7968ea1d22f.gif"
const nuke = new Discord.MessageAttachment(link, "nuke.gif")
var posicion = message.channel.position
message.channel.clone().then((canal) => {
message.channel.delete()
canal.setPosition(posicion)
canal.send("**Canal nukeado**", nuke)
}) 
}
});
