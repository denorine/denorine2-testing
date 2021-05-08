const Discord = require('discord.js');
require('module-alias/register')
const client = new Discord.Client();
const fs = require('fs');
const {prefix, token} = require('../config.json');
const version = "Denorine/2.0-alpha-0.0.2 (like Cringebot) AntiGachaChan/1.0";
const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'));
const hooks = fs.readdirSync(__dirname + '/hooks').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection();
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
for (const file of hooks) {
	const command = require(`./hooks/${file}`);
	command.execute(client,hooks);
}
client.once('ready', async () => {
	console.log('Bot Online.');
});
client.on('message', message => {
	let args = message.content.substring(prefix.length).split(" ");
	if (!message.content.startsWith(prefix) || message.author.bot) 
		return;
	
	const command = args.shift().toLowerCase();
	if (!client.commands.has(command)) 
		return;
	const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
	try {
		commands.get(command).execute(message, args, Discord, client, version, cmd);
	} catch (error) {
		console.error(error);
		message.reply(`There was an error trying to execute that command:\n \`\`\`\n ${error}\n\`\`\``);
	}
});
client.login(token);
