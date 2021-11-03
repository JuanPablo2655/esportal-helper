import { ICommand } from "wokcommands";

export default {
    category: 'Utility',
    description: 'Replies with pong',

    slash: 'both',
    testOnly: false,
    ownerOnly: false,

    maxArgs: 0,

    callback: ({ message, interaction }) => {
        if(message) {
            message.reply(':ping_pong: Pong!')
        }
        if (interaction) {
            interaction.reply({
                content: ':ping_pong: Pong!',
                ephemeral: true,
            })
        }
    },
} as ICommand