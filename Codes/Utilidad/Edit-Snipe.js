  
 client.on("message", message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
if(!message) return message.channel.send('No hay ningun mensaje editado.');

    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author)
    .setDescription(`**Canal:** ${message.channel} \n **Mensaje Antiguo:** ${message.oldmessage} \n **Mensaje Nuevo:** ${message.newmessage}`)
    .setColor("#000")
    message.channel.send(embed);
} 
});
