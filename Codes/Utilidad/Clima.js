  
 client.on("message", async message => {
   const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const weather = require('weather-js');

 if(!args[0]) return message.channel.send('Por favor ingrese un nombre de ciudad!')
      
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
        
        if(err) message.channel.send(err.message);

        if(result.length === 0) {
            message.channel.send('**Ingrese una ubicación válida.**')
            return undefined;
        }

            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`El tiempo para ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor("#6064f4")
                .addField('**Zona horaria**', `UTC ${location.timezone}`, true)
                .addField('**Degree Type**', `${location.degreetype}`, true)
                .addField('**Temperatura**', `${current.temperature} Degrees`, true)
                .addField('**Se siente como**', `${current.feelslike} Degrees`, true)
                .addField('**Vientos**', `${current.winddisplay}`, true)
                .addField('**Humedad**', `${current.humidity}%`, true)
                .addField('**Fecha**', `${current.date}`, true)
                .addField('**Día**', `${current.day}`, true)
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()

            message.channel.send({embed})

        });
} 
});
