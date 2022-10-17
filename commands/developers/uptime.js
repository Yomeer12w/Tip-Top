const { MessageEmbed } = require('discord.js');
const moment = require("moment");
require('moment-duration-format');
const { clientname, clientavatar } = require("../../botconfig/main.json");

module.exports = {
        name: 'uptime',
        aliases: ['uptime'],
        description: 'Shows the Bot\'s uptime',
        toggleOff: false,
        developersOnly: true,
        category: __dirname.split("Commands\\")[1],

    run: async (client, message) => {

        let uptime = moment.duration(client.uptime).format("D [ days] h[ hours] m[ minutes] s[ seconds]")

        let bicon = client.user.displayAvatarURL()
        const botembed = new MessageEmbed()
            .setTitle("NvmBot")
            .setColor("BLUE")
            .setDescription(`🎆**Nvm has been active for** **${uptime}**`)
            .setTimestamp()
            .setFooter(`${clientname}`, `${clientavatar}`)
            .setThumbnail(bicon);
        message.reply({ embeds: [botembed] });
    }}