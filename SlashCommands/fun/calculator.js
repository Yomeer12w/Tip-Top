const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'calculator',
    description: 'calculator For Fun ⨝',
    run: async ( client, interaction, args) => {
        let ee = new MessageEmbed()
        const simplydjs = require("simply-djs")
        simplydjs.calculator(interaction)
    }
}