 client.on("message", async message => {
    const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 if(message.author.bot) return; 
if (message.content.startsWith("Comando")) { 
const { MessageEmbed } = require("discord.js");
const math = require("mathjs");
    try {
      if (!args[0]) return message.channel.send("!Por favor, dame una ecuación!");

      const embed = new MessageEmbed()
        .setColor("6064f4")
        .setAuthor(`CALCULADORA`)
        .addField(`Pregunta`,(args.join(" ")))
        .addField(`Respuesta`,math.evaluate(args.join(" ")));

      message.channel.send(embed);
    } catch (error) {
      message.channel.send(`Por favor, dame una ecuación válida
`)
    } 
  
} 
});
