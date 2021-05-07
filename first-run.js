const npm = require('npm');
const packages = [
    "discord.js",
    "node-fetch"
]
npm.commands.install();
/*
npm.load(function(err) {
  npm.commands.install(packages, function(er) {
    console.log(er)
  });
});*/