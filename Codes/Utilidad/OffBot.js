 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
 if (message.author.id !== 'AQUI TU ID') {
			return message.channel.send('¡No puede usar este comando!');
		}
		await message.channel.send('Apagando bot...');
		return process.exit();
} 
});
