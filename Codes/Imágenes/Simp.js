  
 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const {MessageAttachment} = require('discord.js')
const Canvas = require('canvas')

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author 

let avatar = user.displayAvatarURL({ dynamic: false, format: 'png', size: 128})

const canvas = Canvas.createCanvas(318, 192) 
const ctx = canvas.getContext('2d')

const bg = await Canvas.loadImage('https://cdn.discordapp.com/attachments/750461925099307129/751872081175511050/IMG_20200905_133034_358.JPG') 

ctx.drawImage(bg, 0, 0, canvas.width, canvas.height) 

ctx.beginPath() 
ctx.arc(70, 75, 50, 0, Math.PI * 2) 
ctx.fillStyle = '#ffffff' 
ctx.fill() 
ctx.stroke() 
ctx.closePath() 
ctx.clip() 

let imagen = await Canvas.loadImage(avatar) 
ctx.drawImage(imagen, 20, 23.5, 100, 100) 

let att = new MessageAttachment(canvas.toBuffer(), 'simp.png') 
message.channel.send(att) 
} 
});
