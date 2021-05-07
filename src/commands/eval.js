const { mfaAuthn } = require("mfa.js");
module.exports = {
	name: 'eval',
	description: 'run code in discord',
	execute(message, args, Discord, client ,version) {
        message.reply("Please Enter 2FA code:") // Note to self, comment this one day
        let sessionActivate = false;
        let attempts = 0;
        const filter = m => m.author == message.author;
        const collector = message.channel.createMessageCollector(filter, { time: 60000 });
        
        collector.on('collect', m => {
            console.log(m.content)
            if (!sessionActivate){
                if (attempts <= 3) {
                    
                    if (mfaAuthn(message.author.id, m.content)) {
                        proceed();
                        sessionActivate = true;
                    } else {
                        attempts++;
                        if(attempts == 3) {
                            message.reply("Final Attempt")
                        } else message.reply("2fa code invalid Attempts " + (4-(attempts)) + "/4 left")
                        if (attempts == 4) {
                            message.reply("Failed 2fa") 
                        }
                        

                    }
                }
            }
        });
        function proceed() {
            try {
                const code = args.join(" ");
                let evaled = eval(code);
         
                if (typeof evaled !== "string") {
                    evaled = require("util").inspect(evaled);
                }
                message.channel.send('code executed');
            } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
            }
        }
	},
};