  
 client.on("message", message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
let servericon = message.guild.iconURL;
let serverembed = new Discord.MessageEmbed()
.setTitle("Server Info")
.setColor("#6064f4")
.setThumbnail(servericon)
.addField("Nombre:", message.guild.name)
.addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
.addField("Canales:", message.guild.channels.cache.size, true)
.addField("Roles:", message.guild.roles.cache.size, true)
.addField("Creado el", message.guild.createdAt)
.addField("Te uniste", message.member.joinedAt)
.addField("Users:", message.guild.memberCount)
.setThumbnail(message.guild.iconURL())
.setTimestamp()
.setFooter(message.author.username, message.author.avatarURL);
message.channel.send(serverembed);
} 
});
