import { ICommand } from "wokcommands";
import DiscordJS, { Message, MessageEmbed } from 'discord.js';
import axios from "axios";

export default {
    category: 'esportal',
    description: 'Checks Recent Esportal Matches.',

    maxArgs: 0,

    slash: 'both',
    testOnly: false,
    ownerOnly: false,

    callback: async ({ }) => {
        
        let res = await axios
            .get(`https://api.esportal.com/stats/matches_played`) as any
            
        let data = res.data;
        //console.log(data)

        const embed = new MessageEmbed()
            .setTitle(`View Esportal`)
            .setURL(`https://esportal.com/home`)
            .setColor('AQUA')
            .addFields([
                {
                name: 'Matches Today',
                value: `${data.matches_today}`,
                inline: true
                },
                {
                name: 'Matches This Week',
                value: `${data.matches_this_week}`,
                inline: true
                },
                {
                name: '\u200B',
                value: '\u200B',
                inline: true
                },
                {
                name: 'Gathers This Week',
                value: `${data.gathers_this_week}`,
                inline: true
                },
                {
                name: '\u200B',
                value: '\u200B',
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