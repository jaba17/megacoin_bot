const Discord = require('discord.js');

const client = new Discord.Client();

var participantsNumber = 0;


client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

    if (message.content === 'funktioniert xD') {

    	message.channel.send('perfekt :)');

  	}

});


client.on('message', message => {

    if (message.content == 'discordapp.com/invite/' || message.content == 'discord.gg/') {
        purge();
        if(Math.random() > 0.5){
            message.channel.send("I didn't see that one :blush:");
        }else{
            message.channel.send("Okay, I didn't see that one :wink:");
        }

    }

}); 

client.on('message', message => {

    if (message.content === 'ping' || message.content === "Ping" || message.content === "PING") {

    	message.channel.send('PONG!');

  	}

});


client.on('message', message => {

    if (message.content === 'Paul') {

    	message.channel.send(':poop:');

  	}

});

client.on('message', message => {

    if (message.content === '!participate_old') {
        
        
    	message.channel.send('You participated successfull in this giveaway!');
        participantsNumber = participantsNumber+1;
        message.channel.send(participantsNumber+' participants');

        
  	}
});

client.on('message', message => {

    if (message.content === 'bing') {

    	message.reply('BONG!');

  	}

});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
