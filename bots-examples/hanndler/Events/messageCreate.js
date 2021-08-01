const prefix = process.env.DISCORD_PREFIX;

async function run(message) {
	if (message.author.bot ||
		!message.content.startsWith(prefix) ||
		message.system ||
		!message.author
	) return;

	const client = message.client
	const args = message.content.split(/\s+/g);
	const command = args.shift().slice(prefix.length).toLowerCase();
	if (!command) return;
	const cmd = client.commands.get(command) ||
		client.command.find(c => c.aliases.includes(command));
	if (!cmd) return;

	await cmd.run(message, args);

};









module.exports = {
	run: run,
	name: 'messageCreate'
};