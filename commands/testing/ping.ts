import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with pong',

    slash: 'both',
    testOnly: false,
    ownerOnly: false,
    ephemeral: true,

    callback: ({ }) => {
        return ':ping_pong: Pong!'
    },
} as ICommand

// !ping
// /ping