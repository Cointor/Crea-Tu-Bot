 client.on("message", message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const akaneko = require("akaneko"); 
const wallpc = await akaneko.wallpapers() 
let wallpaper = await akaneko.mobileWallpapers() 

const movil = new Discord.MessageEmbed()
    .setImage(wallpaper) 
    .setColor("6064f4")
    if (message.content.endsWith("-pc")) { 
        const pc = new Discord.MessageEmbed()
        .setImage(wallpc)
        .setColor("6064f4")
        return message.channel.send(pc)
    }
    message.channel.send(movil)
} 
});
