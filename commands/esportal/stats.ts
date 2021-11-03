import { ICommand } from "wokcommands";
import DiscordJS, { Message, MessageEmbed } from 'discord.js';
import axios from "axios";

export default {
    category: 'Esportal',
    description: 'Checks The Stats of Esportal.',

    maxArgs: 0,

    slash: 'both',
    testOnly: false,
    ownerOnly: false,

    callback: async ({ }) => {

        const errorembed = new MessageEmbed()
        .setTitle(`An error has occured.`)
        .setDescription(`Please try again later.`)
        .setColor('RED')
        
        try {
            
        var res = await axios
            .get(`https://api.esportal.com/matchmaking/stats`) as any
        
        }
            
        catch {

        return errorembed
        
        }

        let data = res.data;
        //console.log(data)

        const embed = new MessageEmbed()
            .setTitle(`View Esportal`)
            .setURL(`https://esportal.com/home`)
            .setColor('AQUA')
            .addFields([
                {
                name: 'Online Users',
                value: `${data.online_users}`,
                inline: true
                },
                {
                name: 'Queued Users',
                value: `${data.queued_users}`,
                inline: true
                },
                {
                name: '\u200B',
                value: '\u200B',
                inline: true
                },
                {
                name: 'Live Gathers',
                value: `${data.live_gathers}`,
                inline: true
                },
                {
                name: 'Public Server Players',
                value: `${data.public_server_players}`,
                inline: true
                },
                {
                name: '\u200B',
                value: '\u200B',
                inline: true
                }
            ])

        return embed

    },
} as ICommand

// /user