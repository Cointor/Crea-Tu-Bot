client.on("message", message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const marsnpm = require("marsnpm"); 
const mars = require('marsnpm')
let res = await mars.genHex()
return message.channel.send(res)
} 
});
