  
 client.on("message", message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const {MessageAttachment} = require('discord.js')
const Canvas = require('canvas')

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author // 

let avatar = user.displayAvatarURL({ dynamic: false, size: 128, format: 'png' }) 

const canvas = Canvas.createCanvas(468, 415) 
const ctx = canvas.getContext('2d')

let bg = await Canvas.loadImage('https://cdn.discordapp.com/attachments/750461925099307129/752473603127377961/IMG_20200907_051913_014.JPG') 
ctx.drawImage(bg, 0, 0)

ctx.beginPath() 
ctx.arc(canvas.width/2, 70, 60, 0, Math.PI * 2) 
ctx.fillStyle = '#000'
ctx.fill()
ctx.stroke()
ctx.closePath()
ctx.clip()
 
let imagen = await Canvas.loadImage(avatar)
ctx.drawImage(imagen, 169, 10.7)

let att = new MessageAttachment(canvas.toBuffer(), 'admin.png') 
message.channel.send(att) 
} 
});
