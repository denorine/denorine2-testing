const { mfaAuthn } = require("mfa.js");
const { check } = require("../denolib/permissions");

module.exports = {
	name: 'eval',
	description: 'run code in discord',
	execute(message, args, Discord, client ,version) {
		if (!check(message, 3)) return message.reply("You are missing Deployer Permissions"); // Level 3
		// Start 2fa check
		message.reply("Please Enter 2FA code:") // Note to self, comment this one day
		let sessionActivate = false; // set ignore variable
		let attempts = 0; // set attempts variable
		const filter = m => m.author == message.author; // only use messages from the author
		const collector = message.channel.createMessageCollector(filter, { time: 60000 }); // you have one minute
		
		collector.on('collect', m => {
			if (!sessionActivate){
				if (attempts <= 3) { 
					if (mfaAuthn(message.author.id, m.content)) {
						proceed(); // success, safe to proceed
						sessionActivate = true; // dont check any more 2fa codes
					} else {
						attempts++;
						if(attempts == 3) { // 3 and 4 have special messages
							message.reply("Final Attempt")
						} else message.reply("2fa code invalid Attempts " + (4-(attempts)) + "/4 left")
						if (attempts == 4) {
							message.reply("Failed 2fa") 
						}
					}
				}
			}
		});
		// end 2fa check
		function proceed() { // on event of success
			try {
				const code = args.join(" "); // join code
				let evaled = eval(code); // execute code
		 
				if (typeof evaled !== "string") {
					evaled = require("util").inspect(evaled);
				}
				message.channel.send('code executed'); // code execution done
			} catch (err) { // on error event..
				message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``); // report error to evaler
			}
		}
	},
};