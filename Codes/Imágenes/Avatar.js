// Aquí te enseño un code completo para hacer un comando avatar el cual te permite ver el el avatar de cualquier usuario 

client.on("message", async message => {
            const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if(message.author.bot) return;
if (message.content.startsWith("Comando")) { 
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;
if (!member.user.avatarURL) return message.channel.send(`Ese usuario no tiene avatar`); // // Con esto obtenemos el avatar si es mencionado o no

const cointor = new Discord.MessageEmbed() // Creamos Embed
            .setTitle(`${member.user.username}'s Avatar`)
            .setImage( member.user.displayAvatarURL({ size: 1024, dynamic: true, format: "png" }))
             .setColor(member.displayHexColor) // Con esto el embed tendra el color de la foto del avatar
            .setURL(member.user.avatarURL()) // URL del Avatar 
            .setFooter(
    (member.id === message.member.id)?`Tu foto ${member.displayName}`:`Foto de ${member.displayName}`
  );
 message.channel.send(cointor)
.catch(() => message.channel.send('**Error:** Missing permission `Embed link` ')); // Solo si hay error
} 
});
    

