// Un Comando de basura con el Avatar, Ejemplo: https://media.discordapp.net/attachments/850469128988000286/866475294335434793/basura.png?width=335&height=406

client.on("message", message => {
if(message.author.bot) return;
if (message.content.startsWith("Comando")) { 
const marsnpm = require("marsnpm"); 
message.channel.startTyping();
setTimeout(() => {
  message.channel.stopTyping()
}, 15000);
let userm = message.mentions.users.first() || message.author; 
let avatar = userm.displayAvatarURL({dynamic: false, format: 'png', size: 2048})
let imagen = await marsnpm.basura(avatar); 
let basura = new Discord.MessageAttachment(imagen, "basura.png") 
message.channel.send(basura);
 }
});
