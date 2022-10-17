const { Client, CommandInteraction, Interaction, MessageEmbed } = require("discord.js");
const glop = require('glob');
const chalk = require("chalk");
const { clientname, clientavatar } = require("../../botconfig/main.json");

module.exports = {
    name: 'restart',
    description: 'Restart cmd all !',
    type: "CHAT_INPUT",
    userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    botpermissions: ["ADMINISTRATOR"],
    run: async ( client, interaction, args ) => {
      client.slashCommands.sweep(() => true);
      glop(`${__dirname}/../**/*.js`, async (err, filePaths) => {
        if (err) return console.log(err);
        filePaths.forEach((file) => {
            delete require.cache[require.resolve(file)];

            const pull = require(file)
            if (pull.name) {
                console.log(
                    chalk.red("✪ ") + 
                    chalk.blue(`restet `) +
                    chalk.green(`${pull.name} `) +
                    chalk.blue(`Command`)
                );
                client.slashCommands.set(pull.name, pull);
            }

            if (pull.aliases && Array.isArray(pull.aliases)) {
                pull.aliases.forEach((alias) => {
                    client.aliases.set(alias, pull.name);
                });
            }
        });
      });
      let embed = new MessageEmbed()
      .setTitle('<:3865vslverified:1028576125053583360> Done Rest Commands ')
      .setColor("PURPLE")
      .setFooter(`${clientname}`, `${clientavatar}`)
      .setTimestamp()

      interaction.followUp({ embeds: [embed] });
    },
};