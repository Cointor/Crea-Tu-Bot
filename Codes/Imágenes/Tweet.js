 client.on("message", message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
let txt = args.join('%20');
	
const embed2 = new Discord.MessageEmbed()
.setTitle(`ERROR`)
.setDescription(`No has colocado ningun argumento.`)
.setColor(`RED`)
.setThumbnail("https://media.tenor.co/videos/34b7e223f916657bbfaf9f5076d6fe61/mp4")	
	

if (!txt) return message.channel.send(embed2) 

	
let autor = message.author;

let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=tweet&username=${autor.username}&text=${txt}&raw=1`,'logo.png') 


message.channel.send(attachment)	
} 
});
