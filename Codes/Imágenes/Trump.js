client.on("message", async message => {
 if(message.author.bot) return; 
  if (message.content.startsWith("Comando")) {
const args = message.content.trim().split(/ +/g);
 const command = args.shift().toLowerCase();
/* CODE */
if(!args[0]) return message.channel.send("Escribe el texto a copiar ") 
let mensaje = args.join('%20');
let attachment = new Discord.MessageAttachment (`https://api.no-api-key.com/api/v2/trump?message=${mensaje}`, 'image.png')
message.channel.send(attachment)
} 
});
