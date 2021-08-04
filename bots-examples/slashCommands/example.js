const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const commands = [{ name: 'Ping', description: 'Pong!' }];

async function setup(cmds) {
	client.application.commands.set(cmds);
	await client.login();
}


client.on('ready', (bot) => {
	console.log(`Iniciado como ${bot.user.tag}`);
})

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;
	if (interaction.commandName === 'ping') {
		await interaction.reply(`Mi ping es ${client.ws.ping}`);
	}
})


setup(commands)