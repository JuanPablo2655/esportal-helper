module.exports = async (client: { guilds: { cache: { size: any; }; }; user: { setPresence: (arg0: { activities: { name: string; type: string; url: string; }[]; }) => void; }; }) => {
    let statuses = 0;
    setInterval(async () => {
        const arrayOfStatus = [
            `This is Esportal Helper Canary!`,
            `Prefix is: 'e!'`,
            `Testing is fun.`,
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
    }, 30000)
}