 client.on("message", message => {
 if(message.author.bot) return; 
if (message.content.startsWith("Comando")) { 
const marsnpm = require("marsnpm"); 
message.channel.startTyping();
setTimeout(() => {
  message.channel.stopTyping()
}, 5000);
let userm = message.mentions.users.first() || message.author; 
let avatar = userm.displayAvatarURL({dynamic: false, format: 'png', size: 2048})
let imagen = await marsnpm.checkout(avatar); 
let checkout = new Discord.MessageAttachment(imagen, "checkout.png") 
message.channel.send(checkout);
}
});
