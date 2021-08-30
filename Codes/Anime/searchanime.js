  
 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const mal = require("mal-scraper")
let name = args.join(" ")
if(!name) return message.channel.send("Escribe el nombre de un Anime o Manga")
mal.getInfoFromName(name).then((data) => {
const embed = new Discord.MessageEmbed() 
.setColor("#61d3ca")
.setTitle(":mag_right: Resultados de la Busqueda :mag:")
.addField("Titulo: ", `[${data.title}](${data.url})`)
.addField("Sinopsis: ", `${data.synopsis}`)
.setImage(`${data.picture}`)
message.channel.send(embed) 
})
} 
});
