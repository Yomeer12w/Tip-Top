const { Client, Collection } = require("discord.js");
const fs = require("fs")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")


 const client = new Client({ intents: 32767 });

module.exports = client;

const chalk = require("chalk");

// ———————————————[Global Variables]———————————————
client.commands = new Collection();
client.aliases = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();

require("events").EventEmitter.defaultMaxListeners = 50000;

client.on("ready", () => {
   console.log(chalk.blue('Im Ready'))
})



client.config = require("./botconfig/main.json");
require("./handler")(client);
// Initializing the project.

// ———————————————[Logging Into Client]———————————————\



const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch("1024359889788747787") 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
});

const token = process.env["clienttoken"] || client.config.clienttoken;
if(token === ""){
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(
      chalk.white("["),
      chalk.red.bold("AntiCrash"),
      chalk.white("]"),
      chalk.gray(" : "),
      chalk.white.bold("Invalid Token")
   );
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(chalk.magenta("There Are 3 Ways To Fix This"));
   console.log(
      chalk.blue("Put Your ") + chalk.red("Bot Token ") + chalk.blue("in:")
   );
   console.log(
      chalk.yellow.bold("1.) ") +
         chalk.cyan("index.js") +
         chalk.gray(
            " On the client.login line remove client.login(token) and write client.login('Your token')"
         )
   );
   console.log(
      chalk.yellow.bold("2.) ") +
         chalk.cyan("ENV/Secrets") +
         chalk.gray(
            " If using replit, make new secret named 'clienttoken' and put your token in it else, if your using VsCode, Then Follow Some ENV tutorials (I don't suggest using it in VSC)"
         )
   );
   console.log(
      chalk.yellow.bold("3.) ") +
         chalk.cyan("main.json ") +
         chalk.gray(
            'Go To botconfig/main.json, Find The Line with client.token and put "client.token":"Your Bot Token"'
         )
   );
   
} else {
   client.login(token);
}
// Login The Bot.
// ———————————————[Error Handling]———————————————
process.on("unhandledRejection", (reason, p) => {
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(
      chalk.white("["),
      chalk.red.bold("AntiCrash"),
      chalk.white("]"),
      chalk.gray(" : "),
      chalk.white.bold("Unhandled Rejection/Catch")
   );
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(
      chalk.white("["),
      chalk.red.bold("AntiCrash"),
      chalk.white("]"),
      chalk.gray(" : "),
      chalk.white.bold("Uncaught Exception/Catch")
   );
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(
      chalk.white("["),
      chalk.red.bold("AntiCrash"),
      chalk.white("]"),
      chalk.gray(" : "),
      chalk.white.bold("Multiple Resolves")
   );
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(type, promise, reason);
});




const { MessageEmbed, MessageActionRow, MessageButton} = require("discord.js");
const { SelectMenuBuilder } = require("@discordjs/builders");
const prefix = "!"


// const role1 = "1020692815283503145" //id role 1
// const role2 = "" // id role 2
// const role3 = "" //id role 3
// const role4 = "" //id role 4
// //لا تعدل اي شئ غير الرولات

const role11 = "1020692815283503145"
const role22 = "1030886507898220764"

client.on('messageCreate', async message => {
   const { MessageSelectMenu } = require('discord.js')
   if(message.content.startsWith(prefix + 'rr')) {
   const row = new MessageActionRow()
   .addComponents(
      new MessageSelectMenu()
      .setCustomId('Select')
      .setPlaceholder('Choose ur role')
      .addOptions([
         {
            label: 'Memebers Role',
            description: 'This Role Only For Members',
            value: 'so',
         },
         {
            label: 'Update Role',
            description: 'This Role Only For Updates',
            value: 'fr',
         },
      ]),
      
   );
   

   await message.channel.send({ content: 'Select', components: [row] });
   }
});

client.on('interactionCreate', async (interaction) => {
   let member = interaction.guild.members.cache.get(interaction.user.id)
   if(!interaction.isSelectMenu()) return;
   if(interaction.values == 'so') {

      if(member.roles.cache.has(role11)) {
         member.roles.remove(role11)
         let embed = new MessageEmbed()
         .setDescription(`I Remove This Role: <@&${role11}> ✅`)
         .setColor('AQUA')
         interaction.reply({ content: [embed], ephemeral: true})
      }
      if(interaction.values == 'so') {
   if(!member.roles.cache.has(role11)) 
     member.roles.add(role11)
      
      let embed = new MessageEmbed()
      .setDescription(`I Give U this Role : <@&${role11}> ✅`)
      .setColor('AQUA')
      interaction.reply({ embeds: [embed], ephemeral: true})
      }
      
   }
   if(interaction.values == 'fr') {
   if(member.roles.cache.has(role22)) 
      member.roles.remove(role22)
      let embed2 = new MessageEmbed()
      .setDescription(`I Remove This Role: <@&${role22}> ✅`)
      .setColor('AQUA')
      interaction.reply({ content: [embed2], ephemeral: true});
   }
   if(interaction.values == 'fr') {
   if(!member.roles.cache.has(role22))
     member.roles.add(role22)
      
      let embed1 = new MessageEmbed()
      .setDescription(`I Give U this Role : <@&${role22}>`)
      .setColor('AQUA')
      interaction.reply({ embeds: [embed1], ephemeral: true})

   }
   
})

// client.on("messageCreate", (yahya) => {
//     if (yahya.content.startsWith(prefix + "role")) {
//         if (!yahya.member.permissions.has("ADMINISTRATOR")) return yahya.reply("You Don't Have Permission 🤦")
//         let embed = new MessageEmbed()
//       .setTitle("Please Collect Roles Here")
//         .setDescription(`\`[1]\` To Get Role <@&${role1}>\n\`[2]\` To Get Role <@&${role2}>\n\`[3]\` To Get Role <@&${role3}>\n\`[4]\` To Get Role <@&${role4}>`)
//         .setFooter(client.user.username,client.user.avatarURL())
//         let row = new MessageActionRow()
//         .addComponents(
//         new MessageButton()
//         .setCustomId("r1")
//         .setLabel("Role 1")
//         .setStyle("PRIMARY"),
//         new MessageButton()
//         .setCustomId("r2")
//         .setLabel("Role 2")
//         .setStyle("PRIMARY"),
//         new MessageButton()
//         .setCustomId("r3")
//         .setLabel("Role 3")
//         .setStyle("PRIMARY"),
//         new MessageButton()
//         .setCustomId("r4")
//         .setLabel("Role 4")
//         .setStyle("PRIMARY"),
//         )
//         yahya.channel.send({embeds: [embed], components: [row]})
//         yahya.delete()
//     }
// })
// client.on("interactionCreate", async (yahya) => {
//   let member = yahya.guild.members.cache.get(yahya.user.id)
//     if (yahya.customId === "r1") {
      
//         if (member.roles.cache.has(role1)) { 
//         member.roles.remove(role1)
//         var embed = new MessageEmbed()
//         .setDescription(`**Done Remove <@&${role1}> ✅**`)
//         .setColor("RANDOM")
//         yahya.reply({embeds: [embed], ephemeral: true})
//         }
//                if (!member.roles.cache.has(role1))
//         member.roles.add(role1)
//         let embed64 = new MessageEmbed()
//         .setDescription(`**Done add <@&${role1}> ✅**`)
//         .setColor("RANDOM")
//         yahya.reply({embeds: [embed64], ephemeral: true})
//     }
//      if (yahya.customId === "r2") {
//         if (member.roles.cache.has(role2)) {
//         member.roles.remove(role2)
//         var embed00 = new MessageEmbed()
//         .setDescription(`**Done Remove <@&${role2}> ✅**`)
//         .setColor("RANDOM")
//         yahya.reply({embeds: [embed00], ephemeral: true})
//         }
//                if (!member.roles.cache.has(role2))
//         member.roles.add(role2)
//         var embed14 = new MessageEmbed()
//         .setDescription(`**Done add <@&${role2}> ✅**`)
//         .setColor("RANDOM")
//         yahya.reply({embeds: [embed14], ephemeral: true})
//     }
//      if (yahya.customId === "r3") {
//         if (member.roles.cache.has(role3)){
//         member.roles.remove(role3)
//         var embed7 = new MessageEmbed()
//         .setDescription(`**Done Remove <@&${role3}> ✅**`)
//         .setColor("RANDOM")
//         yahya.reply({embeds: [embed7], ephemeral: true})
//         }
//                if (!member.roles.cache.has(role3))
//         member.roles.add(role3)
//         var embed99 = new MessageEmbed()
//         .setDescription(`**Done add <@&${role3}> ✅**`)
//         .setColor("RANDOM")
//         yahya.reply({embeds: [embed99], ephemeral: true})
//     }
//      if (yahya.customId === "r4") {
//         if (member.roles.cache.has(role4)){ 
//         member.roles.remove(role4)
//         var embed33 = new MessageEmbed()
//         .setDescription(`**Done Remove <@&${role4}> ✅**`)
//         .setColor("RANDOM")
//         yahya.reply({embeds: [embed33], ephemeral: true})
//         }
//                if (!member.roles.cache.has(role4))
//         member.roles.add(role4)
//         var embed2 = new MessageEmbed()
//         .setDescription(`**Done add <@&${role4}> ✅**`)
//         .setColor("RANDOM")
//         yahya.reply({embeds: [embed2], ephemeral: true})
//     }
// })



client.on('messageCreate', async message => {
   if(message.content.startsWith(prefix + "feed")) {
     
 if(!message.member.roles.cache.has('1020692815283503145')) return message.reply("You dont have permission")
     
   const user = message.mentions.users.first()
   if(!user) return message.channel.send({content : "Mention a user"})
     
   user.send({embeds:[new MessageEmbed().setColor('#303136').setDescription(`**ادا كنت حابب تدعم السيرفر برايك تقدر تسوي فيدباك❤**`).setTitle('FEEDBACK').setURL(message.url)]}).then(async () => {
     message.reply({content : '**Done ✅**'})
     
   }).catch((err) => { message.reply({content: `**خاص المرسل اليه مقفل 🔒**`})})
   }})


   client.on("messageCreate", async (message) => {
      if (message.author.bot) return;

         if (message.content === `<@${client.user.id}>`) {

           let Embed = new MessageEmbed()
           .setAuthor(`${client.user.tag}`, client.user.avatarURL({ dynamic: true }))
           .setColor('RANDOM')
           .setThumbnail(client.user.avatarURL({ dynamic: true }))
           .setFooter(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
           .setTimestamp()
           .setDescription(`**MY PREFIX IS ${prefix}**\n
           **- | NAME : ${client.user.tag}**
           **- | PING : ${client.ws.ping}** :signal_strength:
           **- | DEVELOPER : <1020436586241994812>**
           **- | FOR MORE INFO U CAN TO USE BOTINFO**
           `)


           message.channel.send({ embeds: [Embed] })
         }
     })
const role1 = "1020692815283503145"

client.on('messageCreate', async message => {
   if(message.content.startsWith(prefix + "rol")) {
      const roles = new MessageEmbed()
      .setTitle("Roles")
      .setColor('RANDOM')
      .setDescription('chose ur role 🌌')
      let row = new MessageActionRow()
      .addComponents(
         new MessageButton()
         .setCustomId('r1')
         .setLabel('Member')
         .setStyle('PRIMARY')
      )
      message.channel.send({ embeds: [roles], components: [row] });
   }
})
client.on('interactionCreate', async yahya => {
   let member = yahya.guild.members.cache.get(yahya.user.id)
   if (yahya.customId === "r1") {
     
       if (member.roles.cache.has(role1)) { 
       member.roles.remove(role1)
       let embed = new MessageEmbed()
       .setDescription(`**Done Remove <@&${role1}> ✅**`)
       .setColor("RANDOM")
       yahya.reply({embeds: [embed], ephemeral: true})
       }
       if (!member.roles.cache.has(role1))
       member.roles.add(role1)
       let embed64 = new MessageEmbed()
       .setDescription(`**Done add <@&${role1}> **`)
       .setColor("RANDOM")
       yahya.reply({embeds: [embed64], ephemeral: true})
      
   }
   
})

     client.on("messageCreate", message => {
      if(message.content == prefix + "help") {
      const embed = new MessageEmbed()
              .setTitle("**__Your Embed Title __**")
              .setColor("RANDOM")
              .setDescription("** > Your Bot Description**")
      let row = new MessageActionRow()
          .addComponents(
              new MessageButton()
              .setCustomId('Owners')                  
              .setLabel('Owners Commands')             
              .setStyle("PRIMARY"),            
              new MessageButton()
              .setCustomId('Public')                   
              .setLabel('Public Commands')
              .setStyle("PRIMARY"),         
              new MessageButton()
              .setCustomId('Admins')                   
              .setLabel('Admins Commands')
              .setStyle("PRIMARY"),   
            )
            message.channel.send({ embeds: [embed], components: [row]});
        }
      })
               client.on('interactionCreate', async interaction => {
          if (!interaction.isButton()) return;
          if (interaction.customId === 'Owners') {
              const first = new MessageEmbed()
              .setTitle("Your Title")
              .setColor("RED")
              .setDescription("** > Your Owners Cmds**")
            interaction.update({ embeds: [first]});
        }
      })
               client.on('interactionCreate', async interaction => {
          if (!interaction.isButton()) return;
          if (interaction.customId === 'Public') {
              const first = new MessageEmbed()
              .setTitle("** > Your Title**")
              .setDescription("** > Your  Public Cmds**")
              .setColor("BLUE")
            interaction.update({ embeds: [first]});
        }
      })
      client.on('interactionCreate', async interaction => {
          if (!interaction.isButton()) return;
          if (interaction.customId === 'Admins') {
              const first = new MessageEmbed()
              .setTitle("** > Your Title**")
              .setDescription("** > Your Admins Cmds**")
              .setColor("PURPLE")
            interaction.update({ embeds: [first]});
        }
      })


client.on('messageCreate', async message => {
   if(message.content.startsWith('the word')) {
      message.channel.send('the back word')
   }
})


client.on('guildMemberRemove', async member => {
   let logChannel = client.channels.cache.get('1030682684357349456')
   let embed = new MessageEmbed()
   .setTitle('Member Leave')
   .setColor('AQUA')
   .setTimestamp()
   .setDescription(`Member Leave: <@&${member.user.id}>`)
   logChannel.send({ embeds: [embed] })
})

client.on('channelDelete', channel => {
   let logChannel = client.channels.cache.get('1030682684357349456');
   let embed = new MessageEmbed() 
   .setTitle(`channelDelete`)
   .setColor(`RED`)
   .setTimestamp()
   .setDescription(`channel delete : \`${channel.name}\``)
   logChannel.send({ embeds: [embed] })
 });
  
 client.on('channelCreate', channel  => {
   let logChannel = client.channels.cache.get('1030682684357349456');
   let embed = new MessageEmbed() 
   .setTitle(`channelCreate`)
   .setColor(`GREEN`)
   .setTimestamp()
   .setDescription(`channel create : \`${channel.name}\``)
   logChannel.send({ embeds: [embed] })
 });
 
 client.on('messageDelete', message => {
   let logChannel = client.channels.cache.get('1030682684357349456');
   let embed = new MessageEmbed() 
   .setTitle(`messageDelete`)
   .setColor(`RED`)
   .setTimestamp()
   .setThumbnail(message.guild.iconURL({ dynamic: true }))
   .setDescription(`message delete : **${message.content}**
   <@${message.author.id}>`)
   logChannel.send({ embeds: [embed] })
 });

 
 
 client.on('roleCreate', Role => {
   let logChannel = client.channels.cache.get('1030682684357349456');
   let embed = new MessageEmbed() 
   .setTitle(`RoleCreate`)
   .setColor(`GREEN`)
   .setTimestamp()
   .setDescription(` role create : \`${Role.name}\` `)
   logChannel.send({ embeds: [embed] })
 });
 
 client.on('roleDelete', Role => {
   let logChannel = client.channels.cache.get('1030682684357349456');
   let embed = new MessageEmbed() 
   .setTitle(`RoleDelete`)
   .setColor(`RED`)
   .setTimestamp()
   .setDescription(` role delete : \`${Role.name}\` `)
   logChannel.send({ embeds: [embed] })
 });





client.on('messageCreate', async message => {
   if(message.content.startsWith(prefix + "hh" )) {
      const { MessageSelectMenu } = require('discord.js');
   const row = new MessageActionRow()
   .addComponents(
       new MessageSelectMenu()
       .setCustomId('Select')
       .setPlaceholder('Select ur option')
       .addOptions([
           {
               label: 'Mod Cmds',
               description: 'do this later',
               value: 'frist'
           },
           {
               label: 'Owner Cmds',
               description: 'do this later',
               value: 'second'
           }

       ])
   )

   let embed = new MessageEmbed()
   .setTitle('Welcome This is Select Menu')
   .setDescription('Choose the option what u want')
   .setColor('RANDOM')

   let sendmsg = await message.channel.send({ content: 'ㅤ', embeds: [embed], Components: [row] })

   let embed1 = new MessageEmbed()
   .setTitle('option 1')
   .setDescription('u Choose the option 1 of the menu')
   .setColor('RANDOM')
   
   let embed2 = new MessageEmbed()
   .setTitle('option 2')
   .setDescription('u Choose the option 2 of the menu')
   .setColor('RANDOM')

   let embed3 = new MessageEmbed()
   .setTitle('option 3')
   .setDescription('u Choose the option 3 of the menu')
   .setColor('RANDOM')


   const collector = message.channel.createMessageComponentCollector({
       ComponentType: "SELECT_MENU"
   })

   collector.on('collect', async (Collection) => {
       const value = collected.values[0]

       if(value === 'frist'){
           collected.reply({ embeds: [embed1]})
       }

       if(value === 'second'){
           collected.reply({ embeds: [embed2]})
       }

       if(value === 'third'){
           collected.reply({ embeds: [embed3]})
       }
   })
}})

const {  MessageSelectMenu } = require('discord.js');

client.on('messageCreate', async message => {

    if (message.content === prefix + 'hl') {
       let row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('select')
                    .addOptions([
                        {
                            label: 'الشي التبي يطلع لك الهلب تبعها',
                            description: 'وصف الشي',
                            value: 'first_option',
                        },
                        {
                            label: 'الشي التبي يطلع لك الهلب تبعها',
                            description: 'وصف الشي',
                            value: 'second_option',
                        },
                    ]),
            );

        await message.channel.send({ content: 'Select', components: [row] });
    }
});

client.on("interactionCreate" , interaction => {
  if(!interaction.isSelectMenu()) return;
  if(interaction.values == "first_option") {
    interaction.reply({content:"الشي الطلع لما تسوي الهلب" , ephemeral : true})
  }
  if(interaction.values == "second_option") {
    interaction.reply({content:"الشي الطلع لما تسوي الهلب" , ephemeral : true})
  }
});



