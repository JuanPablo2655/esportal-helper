import axios from "axios";

module.exports = async (client: { channels: { fetch: (arg0: string) => any; }; guilds: { cache: { size: any; }; }; users: { cache: { size: any; }; }; }) => {

    try {
        var res = await axios
            .get(`https://api.esportal.com/matchmaking/stats`) as any
    }
    catch {    
    }
    let esportal = res.data;

    const serving = await client.channels.fetch('903626317667393606');
    const userschannel = await client.channels.fetch('903626444729647114');
    const online = await client.channels.fetch('903626609339277313');
    const queue = await client.channels.fetch('903626671683428393');
    const live = await client.channels.fetch('903626741313052772');

    serving.setName(`Serving: ${client.guilds.cache.size} Servers`)
    userschannel.setName(`Serving ${client.users.cache.size} Users`)
    online.setName(`Online on Esportal: ${esportal.online_users}`)
    queue.setName(`In Queue: ${esportal.queued_users}`)
    live.setName(`Live Gathers: ${esportal.live_gathers}`)
}