// Un simple comando para que el bot mande un mensaje

message.channel.send("Aquí el mensaje")

// Debes de colocarlo dentro de tu Client o handler 

// Ejemplo si usas Client: 

client.on('message', message => {
if (message.content.startsWith("!hola")) { // Comando, Si colocas !hola respondera "Hola"
message.channel.send("Hola"); // Respuesta
}
});

// Ejemplo si usas Handler:

const Discord = require('discord.js');
module.exports = async (client, message, args) => { 
message.channel.send("Hola")
};
