// Con este comando le pondrás un Arcoíris 🌈  al Avatar de un mencionado o al que use el comando

const marsnpm = require("marsnpm"); // NPM que nos permite hacerlo
message.channel.startTyping();
setTimeout(() => {
  message.channel.stopTyping()
}, 15000);
let userm = message.mentions.users.first() || message.author; 
let avatar = userm.displayAvatarURL({dynamic: false, format: 'png', size: 2048})
let imagen = await marsnpm.rainbow(avatar); 
let rainbow = new Discord.MessageAttachment(imagen, "rainbow.png") 
message.channel.send(rainbow); // Mandamos el Mensaje
