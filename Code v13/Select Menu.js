// By sasuke
client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === 'help') {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Selecciona')
                    .addOptions([
                        {
                            label: 'Diversión',
                            description: 'Comando de diversión',
                            value: '1',
                        },
                        {
                            label: 'Moderación',
                            description: 'Comando de moderación',
                            value: 'second_option',
                        },
                    ]),
            );

        message.reply({ content: 'Test', components: [row] });
    }
})
