  
 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
if(!args[0]) return message.channel.send("Escribe el texto a copiar ") 
let mensaje = args.join('%20');
let attachment = new Discord.MessageAttachment
 (`https://ctk-api.herokuapp.com/clyde/${mensaje}`, 'image.png')
message.channel.send(attachment);
} 
});
