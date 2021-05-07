const { check } = require("../denolib/permissions")

module.exports = {
    name: 'exampleadmincommand',
    description: 'exampleadmincommand',
    execute(message, args, Discord, client ,version) {
        if (check(message, 2)) { // Preform message check -> if true.. 
            message.reply("You have permissions") // reply to message that the pass succeeded
        } else { // if not true .. 
            message.reply("You are lacking permission") // reply that the pass failed
        }

    },
}
