import DiscordJS, { Intents, Interaction } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    ]
})

client.on('ready', () => {

    const wok = new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['896403600102801410'],
        botOwners: ['817275612430336022'],

        disabledDefaultCommands: [
            'help',
            'command',
            'language',
            'prefix',
            'requiredrole',
            'channelonly'
        ],

        mongoUri: process.env.DB,
        // dbOptions: {
        //     keepAlive: true
        // }
        debug: true,
        
    })
    .setDefaultPrefix('e!')
    })

client.login(process.env.TOKEN)