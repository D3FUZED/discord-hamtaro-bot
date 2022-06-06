const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
require('dotenv').config();
const db = require('quick.db');
require('./structures/GuildMember.js');

class Hamtaro extends AkairoClient {
    constructor() {
        super({
            ownerID: '765542487225532418', //Input your own Discord ID here
        }, {
            disableMentions: 'everyone'
        });

        this.commandHandler = new CommandHandler(this, {
            directory: './commands/',
            prefix: 'h!', //You may customize your bot prefix here
            blockBots: true, //Prohibits bots from using commands, can be optionally enabled
            blockClient: true, 
            defaultCooldown: 2000, //Default bot command cooldown
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: './listeners/'
        });

        this.commandHandler.loadAll();
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();
        this.db = db;
    }
}

const client = new Hamtaro();
client.login(process.env.BOT_TOKEN);