 client.on("messageCreate", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
 let price = require('crypto-price')
  let Base = "USD"
      let Crypto = "ETH"
    price.getCryptoPrice(Base, Crypto).then(obj => { 
        let precio = obj.price
        var num = Number(precio);
        const embed = new Discord.MessageEmbed()
        .setTitle("Precio Ethereum")
        .setDescription(`El precio de Ethereum en dolares es de `+ `**$ ${num.toFixed(2)}**`)
        .setTimestamp(new Date()) 
        .setColor("GREY")
        .setFooter("Datos sobre la moneda brindados por CoinMarketCap")
        .setThumbnail("https://fotos.subefotos.com/3279a27bc224c776db10e4a291c3a67ao.png")
        message.channel.send({ embeds: [embed] }); 
    }).catch(err => {
        console.log(err)
    })

} 
});
