const permissions = require("../../permissions.json")
const Discord = require("discord.js")
module.exports = {
	/**
	 * @param {Discord.Message} message
	 */
	check(message, level) {
		if(level == 3 && message.author.id == "247349845298249728") return true; // Replace with Deployer Discord ID
		if(level == 3) return false; // Return all other level 3 requests
		let paranoia = false // fail by default
		permissions[message.guild.id][level].forEach(element => { // Check roles 
			if (message.member.roles.cache.has(element)) {
				paranoia = true;
			} 
			
		})
		return paranoia;
		
	}
}