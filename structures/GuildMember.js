const { Structures } = require('discord.js');
const moment = require('moment');

Structures.extend('GuildMember', GuildMember => {
	class GuildMemberExt extends GuildMember {
		constructor(...args) {
			super(...args);
		}
		get economy() {
		  let economy = {
		    money: this.client.db.get(`economy.${this.guild.id}.${this.id}.money`) || 0,
		    bank: this.client.db.get(`economy.${this.guild.id}.${this.id}.bank`) || 0,
		    cooldown: this.client.db.get(`economy.${this.guild.id}.${this.id}.cooldown`),
		    user: this.user
		  }
		  return economy;
		}
		
		setMoney(amount) {
		  return this.client.db.add(`economy.${this.guild.id}.${this.id}.money`, amount)
		}
		
		setBank(amount) {
		  return this.client.db.add(`economy.${this.guild.id}.${this.id}.bank`, amount)
		}

		removeMoney(amount) {
		  return this.client.db.subtract(`economy.${this.guild.id}.${this.id}.money`, amount)
		}
		
		removeBank(amount) {
		  return this.client.db.subtract(`economy.${this.guild.id}.${this.id}.bank`, amount)
		}

		
	}

	return GuildMemberExt;
});