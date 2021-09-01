c lient.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const fetch = require('node-fetch')
const req = await fetch('https://source.unsplash.com/random')
const res = await req.buffer()
const attachament = new Discord.MessageAttachment(res)
message.channel.send(attachament)
} 
});
