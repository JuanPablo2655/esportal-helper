import DiscordJS, { Intents } from 'discord.js'
import { AutoPoster } from 'topgg-autoposter'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
import axios from "axios"
dotenv.config()

const counter = require('./counters/counters.ts')

const client = new DiscordJS.Client({
intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
]
})

const ap = AutoPoster(process.env.TOPGG || '', client)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})

client.on('ready', () => {

    setInterval(async () => {
    counter(client)
    }, 303000)

    console.log(`Esportal Helper is now helping!`)
    console.log(`Serving ${client.guilds.cache.size} servers.`)

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

let statuses = 0;
setInterval ( async () => {
    try {     
        var res = await axios
            .get(`https://api.esportal.com/matchmaking/stats`) as any    
        }          
        catch {
        
        }
        let esportal = res.data;
        // console.log(data)
        const arrayOfStatus = [
            `Serving ${client.guilds.cache.size} servers!`,
            `Prefix is: 'e!'`,
            `Currently Online: ${esportal.online_users}`,
            `Currently in Queue: ${esportal.queued_users}`,
            `Live Gather Matches: ${esportal.live_gathers}`,
        ];
        
        statuses++;
        if(statuses >= arrayOfStatus.length) statuses = 0;
        const status = arrayOfStatus[statuses];
        // console.log(status)
        client.user?.setPresence({
        activities: [
            {
                name: status,
                type: 'STREAMING',
                url: "https://twitch.tv/esportal"
            },
        ],
    })
}, 60000)

client.login(process.env.TOKEN)