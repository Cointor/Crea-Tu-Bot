async function run(message) {
	return await message.reply('Pomg')
};

module.exports = {
	run: run,
	name: 'ping',
	aliases: ['pong']
};