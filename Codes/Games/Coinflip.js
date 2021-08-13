  
 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'Cara';
        else result = 'Cruz';
        const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(`**${message.member.displayName} Flipped ${result}**!`)
        message.channel.send(embed);
} 
});
