  
 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
if(!args[0]) return message.channel.send("Tienes que escribir un texto.");

const embed = new Discord.MessageEmbed()
.setTitle("Texto Alrevez")
.setColor("#000")
.setDescription(args.join(' ').split('').reverse().join(''), { allowedMentions: { parse: [] }})
message.channel.send(embed);
} 
});
