const { MessageEmbed } = require('discord.js')

client.on("messageUpdate", (old, new) => {
  if (old.author.bot) return;
  if (old.content == new.content) return;
  if (!new.guild || !new.member) return;
  const embed = new MessageEmbed()
  .setAuthor(new.member.displayName, new.author.displayAvatarURL({ dynamic: true }))
  .setDescription(`**Canal:** ${new.channel.toString()} \n **Mensaje Antiguo:** ${old.content} \n **Mensaje Nuevo:** ${new.content}`)
  .setColor("#000")
  new.channel.send(embed)
});
