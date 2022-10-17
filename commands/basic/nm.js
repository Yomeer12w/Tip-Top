const Discord = require("discord.js");

module.exports = {
   name: "number",
   aliases: ["nm", "nmp"],
   description: "number join bot server",
   botpermissions: ["ADMINISTRATOR"],
   run: async (client, message, args) => {
      message.channel.send(`waiting...`).then((m4) => {
         setTimeout(() => {
            m4.edit(`${client.guilds.cache.size} Servers !`);
         }, 2000);
      });
   },
};
