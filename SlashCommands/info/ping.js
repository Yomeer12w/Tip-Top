const { MessageActionRow, MessageEmbed } = require("discord.js");
const { clientname, clientavatar } = require("../../botconfig/main.json");
module.exports = {
   name: "ping",
   description: "returns websocket ping",
   type: "CHAT_INPUT",
   run: async function (client, interaction, args) {
      const embed = new MessageEmbed()
      .setTitle('**Ping Bot**')
      .setDescription(`**My Ping is : ${client.ws.ping} <a:loading:939801372352725032>**`)
      .setFooter(`${clientname}`, `${clientavatar}`)
      .setColor('DARK_BUT_NOT_BLACK')
      .setThumbnail()
      await interaction.followUp({embeds: [embed] , ephemeral: true})
   },
};
