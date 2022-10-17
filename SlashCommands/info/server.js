const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { clientname, clientavatar } = require("../../botconfig/main.json");


module.exports = {
    name: 'server',
    description: 'server info ',
    run: async (client, interaction, args) => {
        const ss = new MessageEmbed()
        .setTitle('Server Info ⩝')
        .setDescription(`**Server Name : ${interaction.guild.name} ** \n
        **:id: Server Id : ${interaction.guild.id}**\n
        **:date: Server Created : ${parseInt(interaction.guild.createdAt / 1000)}**\n
        **🔱 Member Number : ${interaction.guild.memberCount}**\n
        **:closed_lock_with_key: Channels Number : ${interaction.guild.channels.cache.filter(m => m.type === 'GUILD_TEXT', 'GUILD_VOICE').size}**\n
        **:crown: Server Owner : ${await interaction.guild.fetchOwner ()}**`)
        .setFooter(`${clientname}`, `${clientavatar}`)
        let button = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('LINK')
            .setLabel('Support Server')
            .setURL('https://discord.gg/MrvXTFgE')
            .setEmoji('<a:dev:939812272203763773')
        )

        interaction.followUp({ embeds: [ss] , components: [button]})
    }
}