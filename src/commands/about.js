module.exports = {
	name: 'about',
	description: 'Displays bot information',
	execute(message, args, Discord, client ,version) {
		const aboutMessage = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('About Bot')
			.setDescription('Official Bot of r/GachaLifeCringe \n Bot Prefix: `a!` \n \n Created by <@247349845298249728> and <@452422621284532230>') // Information
			.setFooter(`Build ${version}`); // Build number

		message.channel.send(aboutMessage);
	},
};
