 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
 const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (args.join(" ").length < 1) return message.channel.send("Debes escribir un mensaje a decir.");
let permisos = message.channel.permissionsFor(message.member);
message.delete()
message.channel.send(args.join(" "), { disableMentions: permisos.has("MENTION_EVERYONE") ? "none" : "everyone"})
} 
});
