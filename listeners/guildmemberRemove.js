const { Listener } = require('discord-akairo');
const Discord = require('discord.js');
const moment = require('moment');

class RemoveListener extends Listener {
    constructor() {
        super('guildmemberremove', {
            emitter: 'client',
            event: 'guildMemberRemove'
        });
    }

    async exec(member) {
        console.log(`"${member.user.username}" has left "${member.guild.name}"` );
        this.client.channels.cache.get('811642640222257222').send({ //edit the join channel here
            embed: new Discord.MessageEmbed()
            .setColor("#FF7300")
            .setTitle(`${member.user.tag} has left`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setColor('#FF7300')
            .addField('__General__', [
                `**❯ Tag:** ${member.user.tag}`,
                `**❯ ID:** ${member.id}`,
                `**❯ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**❯ Joined:** ${moment(member.joinedAt).format('LL LTS')}`,
            ])
            .addField('__Membercount__', [
                `**❯ Membercount:** ${member.guild.memberCount}`,
            ])
            .setFooter(`Hamtaro | Made With ❤️ By papernecklace`)
            .setTimestamp()
        });
    }
    
}

module.exports = RemoveListener;