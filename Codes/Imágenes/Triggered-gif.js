 client.on("message", message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const canvacord = require("canvacord");

let persona = message.mentions.users.first() || message.author;
let avatar = persona.displayAvatarURL({dynamic:false, format:'png'});
let datos = await canvacord.Canvas.trigger(avatar);
let imagen = new Discord.MessageAttachment(datos,"TriggeredHelperBot.gif");

message.channel.send(imagen)
} 
});
