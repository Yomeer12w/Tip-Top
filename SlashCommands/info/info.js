const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { clientname, clientavatar } = require("../../botconfig/main.json");

module.exports = {
  name: 'info',
  description: 'View all info',
  cooldown: 10,
  options: [
    {
      name: 'user',
      description: 'the targeted user',
      type: 'USER'
    }
  ],
  run: async function(client, interaction, args) {
let user = interaction.guild.members.cache.get(args[0]) || interaction.member;
const embed = new MessageEmbed()
.setTitle('Info')
.addField(`__**Info**__`, `Username: ${user.user.username}\n ID: ${user.id}`)
    .addField(`__**Server Info**__`,`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`)
    .setFooter(`${clientname}`, `${clientavatar}`)
    await interaction.followUp({embeds: [embed] , ephemeral: true})
  }}