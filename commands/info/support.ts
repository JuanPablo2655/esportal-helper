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
            message.reply('You can join my support server at: https://dsc.gg/esportalhelper')
        }
        if (interaction) {
            interaction.reply({
                content: 'You can join my support server at: https://dsc.gg/esportalhelper',
                ephemeral: true,
            })
        }
    },
} as ICommand