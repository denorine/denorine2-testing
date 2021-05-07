const Discord = require('discord.js');
console.log("Loaded entryway")
const verifyChannel = '840060571168407582';
// allowed phrases for #entryway
const allowedPhrases = [
    '!I have acknowledged the rules',
    '!i have acknowledged the rules',
    'I have acknowledged the rules',
    'i have acknowledged the rules',
    '!I\'ve acknowledged the rules',
    'ive acknowledged the rules',
    'Ive acknowledged the rules',
    'I‘ve acknowledged the rules'
]; 
module.exports = {
    /** 
    *@param {Discord.Client} client
    */
    execute(client) {
        client.on('message', message => {
            if(message.channel.id == verifyChannel) {
                // return if message was from cringe-bot
                if(message.author.bot) return;
                if(allowedPhrases.includes(message.content)) {
                    // Give new user average person role and delete their message
                    message.member.roles.add(message.guild.roles.cache.get('840064411443265546'));
                    message.author.send('You have gained access to the server!')
                    message.delete();
                } else {
                    // Tell them to try again if their phrase was wrong
                    message.delete();
                    message.author.send(`The phrase you sent in <#${verifyChannel}> was incorrect, did you type it right?`);
                }
            }
        })
    }
}