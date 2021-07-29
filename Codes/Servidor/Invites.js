  
 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

            let invites = await message.guild.fetchInvites()

            let memberInvites = invites.filter(i => i.inviter && i.inviter.id === member.user.id);

            if (memberInvites.size <= 0) {
                return message.channel.send(`${member.displayName} ¡No invitó a nadie al servidor!
`, (member === message.member ? null : member));
  {}          }

            let content = memberInvites.map(i => i.code).join("\n");
            let index = 0;
            memberInvites.forEach(invite => index += invite.uses);

            let embed = new Discord.MessageEmbed()
                .setColor("#6064f4")
                .setFooter(message.guild.name, message.guild.iconURL())
                .setAuthor(`Rastreador de invitaciones para ${message.guild.name}`)
                .setDescription(`Información sobre invitaciones de ${member.displayName}`)
                .addField("**Personas invitadas:**", index)
                .addField("Invitation Codes\n\n", content);
            message.channel.send(embed)
} 
});
