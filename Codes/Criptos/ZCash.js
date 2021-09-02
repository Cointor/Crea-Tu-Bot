 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
   let price = require('crypto-price')
  let Base = "USD"
      let Crypto = "ZEC"
    price.getCryptoPrice(Base, Crypto).then(obj => { 
        let precio = obj.price
        var num = Number(precio);
        const embed = new Discord.MessageEmbed()
        .setTitle("Precio ZCash")
        .setDescription(`El precio de ZCash en dolares es de `+ `**$ ${num.toFixed(2)}**`)
        .setTimestamp(new Date()) 
        .setColor("#ecb244")
        .setFooter("Datos sobre la moneda brindados por CoinMarketCap")
        .setThumbnail("https://media.discordapp.net/attachments/763118472573222992/806667600310435880/Zcash-ZEC-icon.png?width=409&height=409")
        message.channel.send(embed)
    }).catch(err => {
        console.log(err)
    })

} 
});
