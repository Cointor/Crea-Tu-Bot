 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const marsnpm = require("marsnpm"); 
message.channel.startTyping();
setTimeout(() => {
  message.channel.stopTyping()
}, 15000);
let userm = message.mentions.users.first() || message.author; 
let avatar = userm.displayAvatarURL({dynamic: false, format: 'png', size: 2048})
let imagen = await marsnpm.wasted(avatar); 
let wasted = new Discord.MessageAttachment(imagen, "wasted.png") 
message.channel.send(wasted);
} 
});
