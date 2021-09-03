// Elimina:
client.on('message', async message => {
if (message.content.startsWith('Ping')) {
message.channel.send("No dire `Pong`"); 
}
});
// Añade:
client.on('messageCreate', async message => {
if (message.content.startsWith('Ping')) {
message.channel.send("No dire `Pong`"); 
}
});

// Se cambia message por messageCreate
