const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

    if (message.content === 'ping') {

    	message.channel.send('PONG!');

  	}

});


client.on('message', message => {

    if (message.content === 'Paul') {

    	message.channel.send(':poop:');

  	}

});

client.on('message', message => {

    if (message.content === '!participate') {
        
    	message.channel.send('You participated successfull in this giveaway!');
  	}
});

client.on('message', message => {

    if (message.content === 'bing') {

    	message.reply('BONG!');

  	}

});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
