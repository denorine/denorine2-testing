const { check } = require("../denolib/permissions")

module.exports = {
    name: 'examplemodcommand',
    description: 'examplemodcommand',
    execute(message, args, Discord, client ,version) {
        if (check(message, 1)) {
            message.reply("You have permissions")
        } else {
            message.reply("You are lacking permission")
        }

    },
}