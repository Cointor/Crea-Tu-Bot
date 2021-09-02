// Echo por Sasuke

const Discord = require('discord.js') /* <-- Define discord.js esto se usa en general */
const client = new Discord.Client(); /* <-- Define client se usa más para los eventos */
const { MessageEmbed } = require('discord.js') /* <-- Define los embed */
/* ---------------------------------------------------------------------------------- */
let prefix = process.env.PREFIX;
/* ---------------------------------------------------------------------------------- */
client.on('message', async message => { /* El evento message se encargara de enviar los mensajes y el async es para poder usar los await */
  if (message.author.bot) return; /* Para que los bots no usen comandos */
  if (message.channel.type === "dm") return; /* Pa que tu bot no responda en privado */
  if (!message.content.startsWith(prefix)) return;  /* si el mensaje no contiene el prefix no manda nada */
  const args = message.content.slice(prefix.length).trim().split(/ +/g); /* Los args se usan para obtener dichos campos en mensajes */
  const command = args.shift().toLowerCase(); /* El contenido general de los comandos */
/* ---------------------------------------COMANDOS------------------------------------------- */
  if(command === "hola"){ /* si el mensaje dice p/hola el bot ejecutara un comando */
   message.channel.send('Hola que tal?') /* Enviamos un mensaje de verificación */
  }
/* ---------------------------------------COMANDOS------------------------------------------- */
  if(command === "myname"){ /* si el mensaje dice p/myname el bot ejecutara un comando */
   let name = args[0]; /* Definimos el primer args que es la primera palabra despues del comando */
   if(!name) return message.channel.send('Dime tu nombre') /* Si no dice nada mandara esto */
   message.channel.send(`Hola ${name} como te va?`) /* Hola qsy20 como te va? */
  }
})
