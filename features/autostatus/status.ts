import axios from "axios";

module.exports = async (client: { guilds: { cache: { size: any; }; }; user: { setPresence: (arg0: { activities: { name: string; type: string; url: string; }[]; }) => void; }; }) => {
    let statuses = 0;
    setInterval(async () => {
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
        if (statuses >= arrayOfStatus.length) statuses = 0;
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
}