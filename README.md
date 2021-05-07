# Denorine 2 - The ultimate bot for all your discord bot needs
Denorine 2.0 is a discord bot made to simplify your life, it is modular and has its own init system
### init system
Denorine uses something called the hooks system, which is somewhat similar to a bsd style init script.
Usage is simple
here is an example hook files
```js
const Discord = require("discord.js");

module.exports = {
    /** 
    *@param {Discord.Client} client
    */
    execute(client) {
        client.once('ready', async () => {
            client.user.setActivity("Gacha Cringe", {
                type: "WATCHING",
              });
        });
    }
}
```

anything in execute will be executed on bot ready, simply place the hook file in src/hooks

# More Docs coming soon, please wait

Check out (The first setup guide here)[https://github.com/denorine/denorine2-testing/blob/master/docs/First-Setup.md]