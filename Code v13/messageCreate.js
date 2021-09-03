client.on('messageCreate', async message => {
if (message.content.startsWith('Ping')) {
message.channel.send("No dire `Pong`"); 
}
});
