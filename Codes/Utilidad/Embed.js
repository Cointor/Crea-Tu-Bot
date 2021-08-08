 client.on("message", async message => {
 if(message.author.bot) return; 
if (message.content.startsWith("Comando")) { 
const embed = new Discord.MessageEmbed() 
.setTitle("Titulo, Soporta 256 caracteres") 
.setAuthor(message.author.username, message.author.displayAvatarURL()) 
.setColor("#6064f4") // Aqui es un Color Hex, lo puedes cambiar. 
.setDescription("Descripcion, Soporta 2048 caracteres.")
.setFooter("Pie de pagina, Soporta 1024 caracteres", client.user.avatarURL()) 
.setImage(message.author.displayAvatarURL()) 
.setThumbnail(message.author.displayAvatarURL()) 
.setTimestamp() .setURL("http://github.com/cointor/") 
.addField("Este es un campo puedes añadir solo 25", "Esta es la descipcion") 
 message.channel.send(embed); 
 } 
});
