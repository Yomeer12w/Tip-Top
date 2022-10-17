const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");

module.exports = {
    name: "kick",
    description: "kick a member",
    userPermissions : [`KICK_MEMBERS`],
options :[
    {
name : `user`,
description : `user to kick`,
required : true,
type : `USER`
    },
],
    run: async (client, interaction, args) => {
        const user = interaction.options.getMember("user")

        if (user.id === interaction.user.id) return interaction.followUp({content : `u can't kick ur self idiot`})

        user.kick().then(() => interaction.followUp({content : `${user} has been kicked`})).catch(error => interaction.followUp({content : error.message}))
        
     },
};