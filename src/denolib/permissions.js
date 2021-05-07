const permissions = require("../../permissions.json")
const Discord = require("discord.js")
module.exports = {
    /**
     * @param {Discord.Message} message
     */
    check(message, level) {
        if(level == 3 && message.author.id == 247349845298249728) return true;
        let paranoia = false
        // ATARI FRONT PROGRAM
        permissions[message.guild.id][level].forEach(element => {
            if (message.member.roles.cache.has(element)) {
                paranoia = true;
            } 
            
        })
        return paranoia;
        
    }
}