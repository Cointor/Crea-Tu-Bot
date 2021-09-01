 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
   message.channel.startTyping();
setTimeout(() => {
  message.channel.stopTyping()
}, 5000);
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
   if(!args[0]) return message.channel.send("Escribe el texto a copiar ") 
  let texto = args.join('%20');
  let attachment = new Discord.MessageAttachment(`https://gdcolon.com/tools/gdlogo/img/${texto}`, 'logo.png') 
  message.channel.send(attachment)

} 
});
