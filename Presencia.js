// Como darle presencia a tu bot, La cual es la descripción de tu bot o el estado que aparece.

// Esta debe colocarse en tu "Ready"
client.on('ready', () => {
})

// Ejemplo: 
  client.user.setPresence({

    activity: {
      name: `Aqui lo que dira`,
      type: "PLAYING"
    }
  });

// Lo que quedaria asi: 

client.on('ready', () => {
   client.user.setPresence({

    activity: {
      name: `Aqui lo que dira`,
      type: "PLAYING"
    }
  });
})
// Puede que tengas un .log()
// Asi que puede que el tuyo sea: 

client.on('ready', () => {
  console.log(`Bot: ${client.user.tag} ¡Online!`)
   client.user.setPresence({

    activity: {
      name: `Aqui lo que dira`,
      type: "PLAYING"
    }
  });
  
  // En tu desc aparece "Jugando A", Para cambiar esto remplaza "PLAYING" por cualquiera de estos: 
  /* 
  
  "WATCHING" - Viendo
  
  "LISTENING" - Escuchando 
  
  "COMPETING" - Compitiendo 
  
  "PLAYING" - Jugando
  
  */
  
  // Para cambiar el "Online" del bot:
 client.on('ready', () => {
  console.log(`Bot: ${client.user.tag} ¡Online!`)
   client.user.setPresence({

    activity: {
      name: `Aqui lo que dira`,
      type: "PLAYING" // Añades  lo siguiente: 
    },
    status: "online" // Cambia "online" por otros ya que "online" es el normal de la bolita verde, "dnd" - No molestar, "idle" - AFK o Inactivo 
  });
