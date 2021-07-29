  
 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const fetch = require("node-fetch");
const moment = require("moment");
let query = args.join(' ');
    if (!query) query = await awaitMessages(message);
    if (!query) return;
    const res = await fetch(`https://registry.npmjs.com/${encodeURIComponent(query)}`).catch(err => console.log(err));
    if (res.status === 404) return message.channel.send('No se encontraron resultados de búsqueda, tal vez intente buscar algo que exista.');
    const body = await res.json();
    const embed = new Discord.MessageEmbed()
        .setColor("#6064f4")
        .setTitle(body.name)
        .setURL(`https://www.npmjs.com/package/${body.name}`)
        .setDescription(body.description || 'No descripción.')
        .addField('Versión', body['dist-tags'].latest, true)
        .addField('Licencia', body.license || 'None', true)
        .addField('Autor', body.author ? body.author.name : '???', true)
        .addField('Fecha de creación', moment.utc(body.time.created).format('YYYY/MM/DD hh:mm:ss'), true)
        .addField('Fecha de modificación', body.time.modified ? moment.utc(body.time.modified).format('YYYY/MM/DD hh:mm:ss') : 'None', true)
        .addField('Repositorio', body.repository ? `[View Here](${body.repository.url.split('+')[1]})` : 'None', true)
        .addField('Mantenedores', body.maintainers.map(user => user.name).join(', '))
    message.channel.send(embed);


   async function awaitMessages(message) {
    let responce;

    const filter = (user) => {
        return user.author.id === message.author.id;
    };

    message.channel.send('**¿Qué desea buscar? ** \nEscriba `cancelar` para cancelar el comando.');

    await message.channel.awaitMessages(filter, { max: 1, time: 120000, errors: ['time'] })
        .then((msg) => {
            const firstMsg = msg.first();
            if (firstMsg.content.toLowerCase() === 'cancel') return firstMsg.react('👍');
            responce = firstMsg.content;
        })
        .catch(() => {
            message.channel.send('Bien ... tardaste demasiado en cancelar el comando.');
        });

    return responce;
   }
} 
});
