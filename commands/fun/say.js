const { Command } = require('discord-akairo');

class SayCommand extends Command {
	constructor() {
		super('say', {
			aliases: ['say'],
			channel: 'guild',
            category: 'Fun',
			userPermissions: ['ADMINISTRATOR'],
			args: [
				{
					id: 'thing',
					type: 'string',
					match: 'content'
				}
			],
		});
	}

	async exec(message, { thing }) {
		if (!thing) return message.channel.send('Don\'t waste my time <:Hamster:681246443490508811>')
		message.channel.send(thing);
		message.delete();
	}
}

module.exports = SayCommand;