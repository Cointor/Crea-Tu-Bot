 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
 const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
const { Util } = require('discord.js'); 
if (!args) return message.reply(`Necesitas colocar algo que decir `);
let mensaje = args.join(" "); 
for(let i = 0; mensaje.includes("@here") || mensaje.includes("@everyone") || contenidos.includes("<@&870481988107259914>"); i++){
    mensaje = mensaje.replace(/@here/g, "here");
    mensaje = mensaje.replace(/@everyone/g, "everyone");
    mensaje = mensaje.replace(/<@&870481988107259914>/g, "`ROL_NO_MENCIONABLE`");
}
return message.channel.send(Util.cleanContent(mensaje, message)).catch(e => e);
} 
});
