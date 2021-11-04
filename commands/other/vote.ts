import { ICommand } from "wokcommands";

export default {
    category: 'Other',
    description: 'Gives you the Voting URL.',

    slash: 'both',
    testOnly: false,
    ownerOnly: false,

    maxArgs: 0,

    callback: ({ message, interaction }) => {
        if(message) {
            message.reply('You can Vote the bot at: https://top.gg/bot/896400457545695232')
        }
        if (interaction) {
            interaction.reply({
                content: 'You can Vote the bot at: https://top.gg/bot/896400457545695232',
                ephemeral: true,
            })
        }
    },
} as ICommand