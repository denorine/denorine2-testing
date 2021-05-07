module.exports = {
	name: 'help',
	description: 'Displays help information.',
	alias: ['h'],
	execute(message, args, Discord, client, version) {
		let helpStr = "";
		
		client.commands.forEach(e => {
			helpStr = `${helpStr}\n\`${e.name}\` ${e.description}`;

		})
		const d = new Discord.MessageEmbed()
			.setColor('#1f8b4c')
			.setDescription('Commands:\n\n' + helpStr)
			.setFooter(`Denorine Version ${version}`)
			.setTitle('Denorine Commands');
		message.channel.send(d);
	},
};