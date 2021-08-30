 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
   let price = require('crypto-price')
  let Base = "USD"
      let Crypto = "LTC"
    price.getCryptoPrice(Base, Crypto).then(obj => { 
        let precio = obj.price
        var num = Number(precio);
        const embed = new Discord.MessageEmbed()
        .setTitle("Precio Litecoin")
        .setDescription(`El precio de Litecoin en dolares es de `+ `**$ ${num.toFixed(2)}**`)
        .setTimestamp(new Date()) 
        .setColor("#838383")
        .setFooter("Datos sobre la moneda brindados por CoinMarketCap")
        .setThumbnail("https://media.discordapp.net/attachments/763118472573222992/806363048276131890/bacf768e3182943bcb44f8817b547729.png")
        message.channel.send(embed) 
    }).catch(err => {
        console.log(err)
    })

} 
});
