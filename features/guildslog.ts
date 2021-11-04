Do u like this very "clean" code :KEK: 
```ts
import { Channel, MessageEmbed } from 'discord.js';
const logschannel = '905764848376369163'

module.exports = (client: { on: (arg0: string, arg1: { (guild: any): void; (guild: any): void; }) => void; guilds: { cache: { size: any; }; }; channels: { cache: { get: (arg0: string) => { (): any; new(): any; send: { (arg0: { embeds: MessageEmbed[]; }): void; new(): any; }; }; }; }; }) => {
    client.on('guildCreate', (guild: { name: any; id: any; memberCount: any; ownerId: any; iconURL: (arg0: { dynamic: boolean; }) => string; }) => {
    const join = new MessageEmbed()
        .setTitle('Added to Guild!')
        .addField('Guild Info:', `${guild.name} (${guild.id})`)
        .addField('Guild Size:', `**${guild.memberCount}** members!`)
        .addField('Owner Info:', `ID (${guild.ownerId})`)
        .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
        .setTimestamp()
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .setColor('GREEN')
    client.channels.cache.get(logschannel).send({embeds: [join]})
})

client.on('guildDelete', (guild: { name: any; id: any; memberCount: any; ownerId: any; iconURL: (arg0: { dynamic: boolean; }) => string; }) => {
    const leave = new MessageEmbed()
        .setTitle('Removed from Guild!')
        .addField('Guild Info:', `${guild.name} (${guild.id})`)
        .addField('Guild Size:', `**${guild.memberCount}** members!`)
        .addField('Owner Info:', `ID (${guild.ownerId})`)
        .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
        .setTimestamp()
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .setColor('RED')
    client.channels.cache.get(logschannel).send({embeds: [leave]})
})
}

```
