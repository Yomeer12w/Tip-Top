const { MessageEmbed, Message, Discord } = require("discord.js");
const { clientname, clientavatar } = require("../../botconfig/main.json");


module.exports = {
    name: 'helplist',
    description: 'Get List Cmds',
    run: async (client, intraction, args, message) => {
        let embed = new MessageEmbed()
        .setTitle('Discord =')
        .setDescription(`**⨽ Prefix Cmd / **\n
        **↣ ping / Get Ping The Bot** \n
        **↣ help / Get List Cmds** \n
        **↣ cmdhelp / Type 'cmdhelp' than but the name of cmd** \n
        **↣ reload / rest Prefix cmds ...** \n
        **↣ eval / eval code ...**\n
        \n
        **⨽ SlashCmds / \n**
        **↣ ping / Get Ms of Bot ** \n
        **↣ help / Get List Cmds ** \n
        **↣ rest / Rest Slash cmds ** \n
        **↣ ban  / Ban User From Server** \n
        **↣ kick / Kick User From Server** \n
        **↣ info / info for User** \n
        **↣ unban / unban some user banned** \n`)
        .setThumbnail('https://img.icons8.com/external-sbts2018-outline-color-sbts2018/344/external-developer-basic-ui-elements-2.2-sbts2018-outline-color-sbts2018.png')
        .setColor('BLURPLE')
        .setFooter(`${clientname}`, `${clientavatar}`)
        .setFooter({ text: 'By Yomee', iconURL: 'https://img.icons8.com/external-sbts2018-outline-color-sbts2018/344/external-developer-basic-ui-elements-2.2-sbts2018-outline-color-sbts2018.png' });

        intraction.followUp({ embeds: [embed] });
    },
};