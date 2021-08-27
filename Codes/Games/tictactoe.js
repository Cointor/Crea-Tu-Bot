 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 
const ttt0 = message.member
			const ttt1 = message.mentions.members.first()
			if(!ttt1)return message.channel.send("Menciona a un usuario para jugar contra él.");
			if(ttt0.id === ttt1.id)return message.channel.send("No puedes jugar contra ti mismo.");
			if(ttt1.bot)return message.channel.send("No puedes jugar contra un bot");

			const pish0 = "<a:x_:818591165611638896> "
			const pish1 = "<a:o_:818591108652204065> "
            

			let turn = 0
            
			let line1 =	['1️⃣', '2️⃣', '3️⃣']
			let line2 =	['4️⃣', '5️⃣', '6️⃣']
			let line3 =	['7️⃣', '8️⃣', '9️⃣']
            
			const waiting = new Discord.MessageEmbed()
			.setDescription("<a:Loading:818578555956232243> **Cargando...**")
			.setColor(0x00fffb)
            
      const winner = new Discord.MessageEmbed()
			  .setColor(0x00fffb)

			const embedttt = new Discord.MessageEmbed()
			.setTitle("**"+ttt0.displayName+"** vs **"+ttt1.displayName+"**")
			.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" "))
			.setColor(0x00fffb);

              const allF =  (reaction, user) => reaction.emoji.name === '1️⃣' || reaction.emoji.name === '2️⃣' || reaction.emoji.name === '3️⃣' || reaction.emoji.name === '4️⃣' || reaction.emoji.name === '5️⃣' ||  reaction.emoji.name === '6️⃣' ||  reaction.emoji.name === '7️⃣' ||  reaction.emoji.name === '8️⃣' || reaction.emoji.name === '9️⃣' && (user.id === ttt0.id || user.id === ttt1.id)
              
const arribaizquierdaF = (reaction, user) => reaction.emoji.name === '1️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
              const arribaF = (reaction, user) => reaction.emoji.name === '2️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
              const arribaderechaF = (reaction, user) => reaction.emoji.name === '3️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const abajoizquierdaF = (reaction, user) => reaction.emoji.name === '7️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
              const abajoF = (reaction, user) => reaction.emoji.name === '8️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const abajoderechaF = (reaction, user) => reaction.emoji.name === '9️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const derechaF = (reaction, user) => reaction.emoji.name === '6️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const izquierdaF = (reaction, user) => reaction.emoji.name === '4️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const centroF = (reaction, user) => reaction.emoji.name === '5️⃣' && (user.id === ttt0.id || user.id === ttt1.id);

			  var reactionUses = 0
              
			  let msg = await message.channel.send(waiting)
              
				await msg.react("1️⃣")
				await msg.react("2️⃣")
				await msg.react("3️⃣")
				await msg.react("4️⃣")
				await msg.react("5️⃣")
				await msg.react("6️⃣")
				await msg.react("7️⃣")
				await msg.react("8️⃣")
				await msg.react("9️⃣")
				await msg.edit(embedttt)		

				const all = msg.createReactionCollector(allF, {time: 120000});
				const arribaizquierda = msg.createReactionCollector(arribaizquierdaF, {time: 120000});
				const arriba = msg.createReactionCollector(arribaF, {time: 120000});
				const abajoizquierda = msg.createReactionCollector(abajoizquierdaF, {time: 120000});
				const arribaderecha = msg.createReactionCollector(arribaderechaF, {time: 120000});
				const abajo = msg.createReactionCollector(abajoF, {time: 120000});
				const abajoderecha = msg.createReactionCollector(abajoderechaF, {time: 120000});
				const derecha = msg.createReactionCollector(derechaF, {time: 120000});
				const izquierda = msg.createReactionCollector(izquierdaF, {time: 120000});
				const centro = msg.createReactionCollector(centroF, {time: 120000});


arribaizquierda.on("collect", async function(r) { 
  
				if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
                  
					line1.splice(0, 1, pish0)
                  
					turn++;
                  
msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt1.displayName+" ( "+pish1+" ) "))
                  
					await r.remove(message.author)
if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("GANÓ "+ttt0.displayName)) && msg.reactions.removeAll();
		   
				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
                  
					line1.splice(0, 1, pish1)
                  
					turn--;
                  
msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt0.displayName+" ( "+pish0+" ) "))
                  
					await r.remove(message.author)
if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("GANÓ "+ttt1.displayName)) && msg.reactions.removeAll();
				}
			
			})
arriba.on("collect", async function(r) {
				if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line1.splice(1, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt1.displayName+"("+pish1+")"))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("GANÓ "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line1.splice(1, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt0.displayName+" ( "+pish0+" ) "))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("GANÓ "+ttt1.displayName)) && msg.reactions.removeAll();

				}
			  })
abajoizquierda.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line3.splice(0, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt1.displayName+"("+pish1+")"))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("GANÓ "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line3.splice(0, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt0.displayName+" ( "+pish0+" ) "))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("GANÓ "+ttt1.displayName)) && msg.reactions.removeAll();

				}
			})
arribaderecha.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line1.splice(2, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt1.displayName+" ( "+pish1+" ) "))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("GANÓ "+ttt0.displayName)) && msg.reactions.removeAll();

				}else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line1.splice(2, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt0.displayName+" ( "+pish0+" ) "))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("GANÓ "+ttt1.displayName)) && msg.reactions.removeAll();

				}
			}) 
abajo.on("collect", async function(r) {
				if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line3.splice(1, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt1.displayName+" ( "+pish1+" ) "))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("GANÓ "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line3.splice(1, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt0.displayName+" ( "+pish0+" ) "))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("GANÓ "+ttt1.displayName)) && msg.reactions.removeAll();

				}
			})
abajoderecha.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line3.splice(2, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt1.displayName+"( " +pish1+" ) "))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("GANÓ "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line3.splice(2, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt0.displayName+"( " +pish0+ " )"))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("GANÓ "+ttt1.displayName)) && msg.reactions.removeAll();

				}
			})
derecha.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line2.splice(2, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt1.displayName+" ( "+pish1+" ) "))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("GANÓ "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line2.splice(2, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt0.displayName+" ( "+pish0+" ) "))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("GANÓ "+ttt1.displayName)) && msg.reactions.removeAll();

				}
			})
izquierda.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line2.splice(0, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt1.displayName+" ( "+pish1+" ) "))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("GANÓ "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line2.splice(0, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt0.displayName+" ( "+pish0+" ) "))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("GANÓ "+ttt1.displayName)) && msg.reactions.removeAll();
					
				}
			})
centro.on("collect", async function(r) {
	             
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line2.splice(1, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt1.displayName+" ( "+pish1+" ) "))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("GANÓ "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line2.splice(1, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Te toca "+ttt0.displayName+" ( "+pish0+" ) "))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("GANÓ "+ttt1.displayName)) && msg.reactions.removeAll();

				}	
			})	

			all.on("collect", async function(r) {
				reactionUses ++;
				if(reactionUses > 9)return msg.edit(winner.setTitle("EMPATE")) && msg.reactions.removeAll();
			})	
} 
});
