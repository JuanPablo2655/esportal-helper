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
    
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<Username>',

    slash: 'both',
    testOnly: false,
    ownerOnly: false,

    callback: async ({ message, text, interaction }) => {

        if (message) {
        
        let res = await axios
            .get(`https://api.esportal.com/user_profile/get?username=${text}&bans=1&team=1&twitch=1`) as any
            
        let data = res.data;
        //console.log(data)

        const messageembed = new MessageEmbed()
            .setTitle(`View the Profile of ${data.username}`)
            .setURL(`https://esportal.com/profile/${data.username}`)
            .setColor('AQUA')
            .addFields([
                {
                name: ':bust_in_silhouette: User',
                value: `${data.username}`,
                inline: true
                },
                {
                name: ':triangular_flag_on_post: Team',
                value: `${data.team.name}`,
                inline: true
                },
                {
                name: ':no_entry_sign: Banned',
                value: `${data.banned}`,
                inline: true
                }

            ])
            .addFields([
                {
                name: ':star: Level',
                value: `${data.level}`,
                inline: true
                },
                {
                name: ':green_square: ELO',
                value: `${data.elo}`,
                inline: true
                },
                {
                name: `\u200B`,
                value: `\u200B`,
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

            return messageembed

        }

        if (interaction) {
        
        const { options } = interaction
        const text = options.getString('username')
        
        let res = await axios
            .get(`https://api.esportal.com/user_profile/get?username=${text}&bans=1&team=1&twitch=1`) as any
        
        let data = res.data;
        //console.log(data)

        const interactionembed = new MessageEmbed()
            .setTitle(`View the Profile of ${data.username}`)
            .setURL(`https://esportal.com/profile/${data.username}`)
            .setColor('AQUA')
            .addFields([
                {
                name: ':bust_in_silhouette: User',
                value: `${data.username}`,
                inline: true
                },
                {
                name: ':triangular_flag_on_post: Team',
                value: `${data.team.name}`,
                inline: true
                },
                {
                name: ':no_entry_sign: Banned',
                value: `${data.banned}`,
                inline: true
                }

            ])
            .addFields([
                {
                name: ':star: Level',
                value: `${data.level}`,
                inline: true
                },
                {
                name: ':green_square: ELO',
                value: `${data.elo}`,
                inline: true
                },
                {
                name: `\u200B`,
                value: `\u200B`,
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

            return interactionembed

        }

    },
} as ICommand

// /user <username>
// e!user <username>