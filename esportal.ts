import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import { AutoPoster } from 'topgg-autoposter'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const counter = require('./features/counters.ts')
const status = require('./features/status.ts')
const alphastatus = require('./features/alphastatus.ts')

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

  // Autoposter
  const ap = AutoPoster(process.env.TOPGG || '', client)

  ap.on('posted', () => {
    console.log('Posted stats to Top.gg!')
})

// Client
client.on('ready', () => {

    // Features

    counter(client)
    status(client)
    // alphastatus(client)

    // Console Logs
    console.log(`Esportal Helper is now helping!`)

// Worn Off Keys
const wok = new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    typeScript: true,
    testServers: ['896403600102801410'],
    botOwners: ['817275612430336022'],
    disabledDefaultCommands: [
        'language',
    ],
    mongoUri: process.env.DB,
    // dbOptions: {
    //     keepAlive: true
    // },
    debug: true,

})

    // Prefixes
    .setDefaultPrefix('e!')
    // .setDefaultPrefix('et!')

    // Commmand Categories
    .setCategorySettings([
        {
            name: 'Esportal',
            emoji: '🎮',
        },
        {
            name: 'Utility',
            emoji: '🚧',
        },
        {
            name: 'Info',
            emoji: '📔',
        },
        {
            name: 'Other',
            emoji: '🔍',
        },
        {
            name: 'Developer',
            emoji: '🖥️',
        }
    ])

    wok.on('databaseConnected', (connection: any, state: any) => {
        console.log(`Database connection state is "${state}"`)
      })

    wok.on('commandException', (command: { names: any[] }, message: any, error: any) => {
        console.log(`An exception occured when using command "${command.names[0]}"! The error is:`)
        console.error(error)
      })
})

// Client Login
client.login(process.env.TOKEN)