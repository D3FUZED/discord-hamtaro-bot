const { Listener } = require('discord-akairo');
const Discord = require('discord.js');
const moment = require('moment');

class AddListener extends Listener {
    constructor() {
        super('guildmemberadd', {
            emitter: 'client',
            event: 'guildMemberAdd'
        });
    }

    async exec(member) {

        //possible join role
        /*
        var role = member.guild.roles.cache.find(role => role.name == "Island Tourist")
        member.user.roles.add(role);
        console.log(`I gave the ${role} role.`);
        */

        console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
        this.client.channels.cache.get('811642640222257222').send({ //edit the join-channel here
            embed: new Discord.MessageEmbed()
            .setColor("#FF7300")
            .setTitle(`${member.user.tag} has joined`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setColor('#FF7300')
            .addField('__General__', [
                `**❯ Tag:** ${member.user.tag}`,
                `**❯ ID:** ${member.id}`,
                `**❯ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**❯ Time Created:** ${moment(member.user.createdTimestamp).format('LT')}, ${moment(member.user.createdTimestamp).format('LL')} (${moment(member.user.createdTimestamp).fromNow()})`,
                `**❯ Joined:** ${moment(member.joinedAt).format('LL LTS')}`,
            ])
            .addField('__Invited by__', [
                `**❯ Invite code:** Not ready yet.`,
            ])
            .addField('__Membercount__', [
                `**❯ Membercount:** ${member.guild.memberCount}`,
            ])
            .setFooter(`Hamtaro | Made With ❤️ By papernecklace`)
            .setTimestamp()
        });
    }
    
}

module.exports = AddListener;