const { Listener } = require('discord-akairo');
const invites = {};
const wait = require('util').promisify(setTimeout);

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }


    
    async exec() {
        await wait(1000);

        this.client.guilds.cache.forEach(g => {
            g.fetchInvites().then(guildInvites => {
                invites[g.id] = guildInvites;
            })
        })

        console.log(`Logged in as ${this.client.user.tag}!`);
        this.client.user.setActivity('my unset status.', { type: 'WATCHING' }); //set the bot status here. Can choose from 'PLAYING', 'WATCHING' or 'STREAMING'. Streaming requires a URL input.
    }
    
}

module.exports = { invites };
module.exports = ReadyListener;