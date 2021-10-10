import { ICommand } from "wokcommands";
import DiscordJS, { Message, MessageEmbed } from 'discord.js';
import axios from "axios";

export default {
    category: 'esportal',
    description: 'Checks an user from Esportal.',

    options:
        [{
        name: 'username',
        description: 'Username of the person you want to check from Esportal.',
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
        }],

    slash: 'both',
    testOnly: false,

    callback: async ({ message, interaction }) => {

        const { options } = interaction
        const username = options.getString('username')
        
        let res = await axios
            .get(`https://api.esportal.com/user_profile/get?username=${username}&bans=1&team=1&twitch=1`) as any
            
        let data = res.data;
        console.log(data)

        const embed = new MessageEmbed()
            .setTitle(`View the Profile of ${username}`)
            .setURL(`https://esportal.com/profile/${username}`)
            .setColor('AQUA')
            .addFields([
                {
                name: ':bust_in_silhouette: User',
                value: `${username}`,
                inline: true
                },
                {
                name: ':no_entry_sign: Banned',
                value: `${data.banned}`,
                inline: true
                },
                {
                name: ':green_square: ELO',
                value: `${data.elo}`,
                inline: true
                }
            ])
            .addFields([
                {
                name: ':+1: Thumbs Up',
                value: `${data.thumbs_up}`,
                inline: true
                },
                {
                name: ':-1: Thumbs Down',
                value: `${data.thumbs_down}`,
                inline: true
                },
                {
                name: ':trophy: MVPs',
                value: `${data.mvps}`,
                inline: true
                }
            ])
            .addFields([
                {
                name: ':regional_indicator_w: Wins',
                value: `${data.wins}`,
                inline: true
                },
                {
                name: ':regional_indicator_l: Losses',
                value: `${data.losses}`,
                inline: true
                },
                {
                name: ':regional_indicator_d: Drops',
                value: `${data.drops}`,
                inline: true
                }
            ])
            .addFields([
                {
                name: ':gun: Kills',
                value: `${data.kills}`,
                inline: true
                },
                {
                name: ':skull: Deaths',
                value: `${data.deaths}`,
                inline: true
                },
                {
                name: ':busts_in_silhouette: Assists',
                value: `${data.assists}`,
                inline: true
                }
            ])

        if (message) {
            message.reply('Please use the Slash command.')
        }
        if (interaction) {
            return embed
        }

    },
} as ICommand

// /user <username>
// e!user <username>