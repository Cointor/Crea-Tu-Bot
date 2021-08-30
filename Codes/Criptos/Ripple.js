  client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
   let price = require('crypto-price')
  let Base = "USD"
      let Crypto = "XRP"
    price.getCryptoPrice(Base, Crypto).then(obj => { 
        let precio = obj.price
        var num = Number(precio);
        const embed = new Discord.MessageEmbed()
        .setTitle("Precio Ripple")
        .setDescription(`El precio de Ripple en dolares es de `+ `**$ ${num.toFixed(2)}**`)
        .setTimestamp(new Date()) 
        .setColor("#23292f")
        .setFooter("Datos sobre la moneda brindados por CoinMarketCap")
        .setThumbnail("https://media.discordapp.net/attachments/763118472573222992/806369648399613962/52.png")
        message.channel.send(embed) 
    }).catch(err => {
        console.log(err)
    })

} 
});
