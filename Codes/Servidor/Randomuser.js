  
 client.on("message", message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
let member = message.guild.members.cache.filter(m => m.user != m.user.bot).random();
let memberAvatar = member.user.displayAvatarURL({ dynamic: true, size: 2048 });
let memberTag = member.user.tag;
let memberID = member.user.id;
const embedRandomMember= new Discord.MessageEmbed()
  .setTitle(memberTag)
  .setThumbnail(memberAvatar)
  .setDescription(`ID: **${memberID}** \n User: <@${memberID}>`)
  .setColor("#000")
message.channel.send(embedRandomMember);
} 
});
