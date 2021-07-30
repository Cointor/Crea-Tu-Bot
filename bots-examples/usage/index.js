const {
	Client,
	Intents
} = require('discord.js');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
	allowedMentions: { repliedUser: false }
});

require('dotenv').config()

const prefix = process.env.DISCORD_PREFIX;

client.on('ready', (bot) => {
	return console.log(`Me he logueado como ${bot.user.tag}`);
});

client.on('messageCreate', async (message) => {
	if (message.author.bot ||
		!message.content.startsWith(prefix) ||
		message.system ||
		!message.author
	) return;

	const args = message.content.split(/\s+/g);
	const command = args.shift().slice(prefix.length).toLowerCase();
	if (!command) return;

	if (command === 'ping') {
		return message.reply('Pong');
	};

});

client.login()