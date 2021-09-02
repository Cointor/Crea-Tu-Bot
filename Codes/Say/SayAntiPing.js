// Echo por sasuke

if(command === "say"){ /* Si elmensaje dice [prefix]say ejecuta el comando */
message.delete({timeout: 0}) /* Eliminados el mensaje del usuario */
if (!args) return message.reply(`Que mensaje quieres que diga por ti`); /* Obtenemos los campos escritos */
let mensaje = args.join(" "); /* Definimos mensaje con los campos escritos */
message.channel.send(mensaje.replace(/@here/g, "here").replace(/@everyone/g, "everyone"));
}
