dconst Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

    if (message.content === 'ping') {

    	message.reply('pong');

  	}

});



// THIS  MUST  BE  THIS  WAY

client.login('MzM3MjY3NjE2Nzk4MjEyMDk2.DVzRVQ.UtfQImAeM5mvLJBLzZ_IiuiZHtg');
