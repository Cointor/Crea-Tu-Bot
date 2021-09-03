 client.on("messageCreate", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Embed")) { 
const embed = new Discord.MessageEmbed()
 .setTitle("Hola")
 .setColor("RED")
message.channel.send({ embeds: [embed] });
} 
});
