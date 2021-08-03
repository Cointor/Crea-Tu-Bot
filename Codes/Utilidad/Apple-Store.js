// Un Comando con el cual podrás buscar aplicaciones de la Apple Store

client.on('message', async message => {
      const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if(message.author.bot) return;
const AppleStore = require("app-store-scraper"); // NPM que nos permitira axceder a la Apple Store desde Discord
if (message.content.startsWith("!hola")) { // Comando, Si colocas !hola respondera "Hola"
if (!args[0])
      return message.channel.send(
        `Por favor escriba el nombre de alguna app para buscar en la Apple Store` // Si no escribio el nombre de la APP a Buscar
      );

    AppleStore.search({
      term: args.join(" "),
      num: 1,
      lang: 'es-es'  // Que nos de las respuestas en Español
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.channel.send(
          `No se encontró ninguna aplicación ` // Por si no hay Respuesta
        );
      }
      
      let Description = App.description.length > 200 ? `${App.description.substr(0, 200)}...` : App.description
      let Price = App.free ? "FREE" : `$${App.price}`; // Para Evitar problemas de Precios
      let Score = App.score.toFixed(1);

      let Embed = new Discord.MessageEmbed() // Creamos Embed
        .setColor("#6064f4") // Un color y mas elementos del embed
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title}`)
        .setDescription(Description)
        .addField(`Precio`, Price, true)
        .addField(`Creador`, App.developer, true)
        .addField(`Clasificación`, `${Score}/5`, true)
        .setFooter(`Pedido por ${message.author.username}`)
        .setTimestamp();

      return message.channel.send(Embed); // Enviamos el Embed
    });
  };
}
});
