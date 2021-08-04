  
 client.on("message", async message => {
   const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const PlayStore = require("google-play-scraper");


        if (!args[0])

      return message.channel.send(

        `¡Por favor, dé algo para buscar!`

      );

    PlayStore.search({

      term: args.join(" "),

      num: 1

    }).then(Data => {

      let App;

      try {

        App = JSON.parse(JSON.stringify(Data[0]));

      } catch (error) {

        return message.channel.send(

          `No se encontró ninguna aplicación`

        );

      }

      let Embed = new Discord.MessageEmbed()

        .setColor("#6064f4")

        .setThumbnail(App.icon)

        .setURL(App.url)

        .setTitle(`${App.title}`)

        .setDescription(App.summary)

        .addField(`Precio`, App.priceText, true)

        .addField(`Creador`, App.developer, true)

        .addField(`Clasificación`, `${App.scoreText}/5`, true)

        .setFooter(`Pedido por ${message.author.username}`)

        .setTimestamp();

      return message.channel.send(Embed);

    });
} 
});
