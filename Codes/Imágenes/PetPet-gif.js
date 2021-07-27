  
 client.on("message", message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const pet = require("pet-pet-gif") 
let animatedGif = await pet(message.author.displayAvatarURL({format: "png"}))
const petpet = new Discord.MessageAttachment(animatedGif, "petpet.gif") 
message.channel.send(petpet) 
} 
});
