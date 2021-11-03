import { ICommand } from "wokcommands";

export default {
    category: 'Info',
    description: 'Gives you the Support Server Invite.',

    slash: 'both',
    testOnly: false,
    ownerOnly: false,

    maxArgs: 0,

    callback: ({ message, interaction }) => {
        if(message) {
            message.reply('You can invite the bot at: https://dsc.gg/esportalbot')
        }
        if (interaction) {
            interaction.reply({
                content: 'You can invite the bot at: https://dsc.gg/esportalbot',
                ephemeral: true,
            })
        }
    },
} as ICommand