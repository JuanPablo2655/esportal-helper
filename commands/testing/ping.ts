import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with pong',

    slash: 'both',
    testOnly: true,
    ownerOnly: true,

    callback: ({ message, interaction }) => {
        return ':ping_pong: Pong!'
    },
} as ICommand

// !ping
// /ping