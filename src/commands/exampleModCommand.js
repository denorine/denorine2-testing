const { check } = require("permissions.js") // import library

module.exports = { // Provided test for permissions system
	name: 'examplemodcommand',
	description: 'examplemodcommand',
	execute(message, args, Discord, client ,version) {
		if (check(message, 1)) { // Check role with permission integer 1
			message.reply("You have permissions") //Return message .. line 10
		} else {
			message.reply("You are lacking permission")
		}
	},
}
