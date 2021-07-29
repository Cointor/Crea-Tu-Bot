  
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
let imagen = await marsnpm.gaussian(avatar); 
let gaussian = new Discord.MessageAttachment(imagen, "gaussian.png") 
message.channel.send(gaussian);
} 
});
