 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
let price = require('crypto-price')
  let Base = "USD"
      let Crypto = "BTC"
    price.getCryptoPrice(Base, Crypto).then(obj => { 
        let precio = obj.price
        var num = Number(precio);
        const embed = new Discord.MessageEmbed()
        .setTitle("Precio Bitcoin")
        .setDescription(`El precio de Bitcoin en dolares es de `+ `**$ ${num.toFixed(2)}**`)
        .setTimestamp(new Date()) 
        .setColor("#f9a239")
        .setFooter("Datos sobre la moneda brindados por CoinMarketCap")
        .setThumbnail("https://media.discordapp.net/attachments/763118472573222992/806358897404411934/5a521fa72f93c7a8d5137fcf.png")
        message.channel.send(embed) 
    }).catch(err => {
        console.log(err)
    })
} 
});
