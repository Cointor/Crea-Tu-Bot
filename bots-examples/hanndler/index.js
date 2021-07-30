const { Client, Intents, Collection } = require('discord.js');
const { join } = require('path')
const { readdirSync, lstatSync } = require('fs');
require('dotenv').config()

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
	allowedMentions: { repliedUser: false }
});


client.commands = new Collectio()



loadCommands()
loadEvents()
client.login()



function loadCommands(dir = './Commands') {
	let elements = readdirSync(join(dir));
	for (element of elements) {
		let stats = lstatSync(join(process.cwd(), dir, element));
		if (stats.isDirectory()) {
			console.log(`Cargando categoria ${element}`);
			loadCommands(dir, element)
		} else {
			if (element.endWith('.js')) {
				let name = element.substring(0, element.length - 3);
				let cmd = new(require(join(dir, element)));
				client.commands.set(cmd.name, cmd);
				console.log(`Commando ${cmd.name} cargado`);
			} else {
				console.warn('Unknown file in dir: ' + element);
			};
		};
	};
};

function loadEvents(dir = './Events') {
	for (const eventFile of readdirSync(join(dir))) {
		if (eventFile.endsWith('.js')) {
			let name = eventFile.substring(0, eventFile.length - 3);
			let event = new(require(join(dir, eventFile)));
			client.on(name, { ...args } => event.run(...args));
			console.log(`Evento ${event.name} cargado`)
		} else {
			console.warn('Unknown file in dir: ' + eventFile)
		};
	};
};