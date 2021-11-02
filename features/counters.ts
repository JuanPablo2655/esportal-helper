import axios from "axios";

module.exports = async (client: { guilds: { cache: { forEach: (arg0: (guild: { memberCount: number; }) => void) => void; size: any; }; }; channels: { fetch: (arg0: string) => any; }; }) => {
    setInterval(async () => {
    try {
        var res = await axios
            .get(`https://api.esportal.com/matchmaking/stats`) as any
    }
    catch {    
    }
        
    let esportal = res.data;
    let count = 0;

    const serving = await client.channels.fetch('903626317667393606');
    const userschannel = await client.channels.fetch('903626444729647114');
    const online = await client.channels.fetch('903626609339277313');
    const queue = await client.channels.fetch('903626671683428393');
    const live = await client.channels.fetch('903626741313052772');
        
    client.guilds.cache.forEach((guild: { memberCount: number; }) => {
	count += guild.memberCount;
	});

    serving.setName(`Serving: ${client.guilds.cache.size} Servers`)
    userschannel.setName(`Serving: ${count} Users`)
    online.setName(`Online on Esportal: ${esportal.online_users}`)
    queue.setName(`In Queue: ${esportal.queued_users}`)
    live.setName(`Live Gathers: ${esportal.live_gathers}`)
    }, 303000)
}