import { Channel, MessageEmbed, Client, Guild, TextChannel } from 'discord.js';
const logschannel = '905764848376369163'

module.exports = (client: Client) => {
    client.on('guildCreate', (guild: Guild) => {
    if (!guild.available) return 
    const join = new MessageEmbed()
        .setTitle('Added to Guild!')
        .addField('Guild Info:', `${guild.name} (${guild.id})`)
        .addField('Guild Size:', `**${guild.memberCount}** members!`)
        .addField('Owner Info:', `ID (${guild.ownerId})`)
        .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
        .setTimestamp()
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .setColor('GREEN')
    (client.channels.cache.get(logschannel) as TextChannel)?.send({embeds: [join]})
})
 
client.on('guildDelete', (guild: Guild) => {
    if (!guild.available) return 
    const leave = new MessageEmbed()
        .setTitle('Removed from Guild!')
        .addField('Guild Info:', `${guild.name} (${guild.id})`)
        .addField('Guild Size:', `**${guild.memberCount}** members!`)
        .addField('Owner Info:', `ID (${guild.ownerId})`)
        .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
        .setTimestamp()
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .setColor('RED')
    (client.channels.cache.get(logschannel) as TextChannel)?.send({embeds: [leave]})
})
}
