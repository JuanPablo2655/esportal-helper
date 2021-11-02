import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const counter = require('./features/counters/counters.ts')
const status = require('./features/autostatus/status.ts')
const autopost = require('./features/autostatus/status.ts')

// Intents
const client = new DiscordJS.Client({
intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
]
})

// Client
client.on('ready', () => {

    // Features
    counter(client)
    status(client)
    autopost(client)

    // Console Logs
    console.log(`Esportal Helper is now helping!`)

    // Worn Off Keys
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
    // Prefixes
    .setDefaultPrefix('e!')
    // .setDefaultPrefix('et!')
})

// Client Login
client.login(process.env.TOKEN)