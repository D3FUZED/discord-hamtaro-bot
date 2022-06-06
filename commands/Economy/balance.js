const { Command } = require("discord-akairo");
const Discord = require("discord.js");

class BalanceCommand extends Command {
  constructor() {
    super("balance", {
      aliases: ["balance", "bal"],
      category: 'Economy'
    })
    
    this.name = "balance"
    this.description = "check someone\'s balance"
    this.usage = "balance [@user]"
    this.example = "balance"
  }
  
  exec(msg) {
    let user = msg.mentions.users.first()
    let you = msg.member
    
    let em = new Discord.MessageEmbed()
    .setColor('#FF7300')
    .setFooter('Hamtaro | Made With ❤️ By papernecklace')
    .setTimestamp()
    
    if(!user) {
      em
      .addFields(
        {
          name: "<a:HFGem:810971356086534175> Gems",
          value: you.economy.money.toLocaleString(),
          inline: true
        },
        {
          name: "Bank",
          value: you.economy.bank.toLocaleString(),
          inline: true
        }
      )
      .setTitle(`${you.economy.user.tag} Balance`)
    } else {
      user = msg.guild.member(user)
      em
      .addFields(
        {
          name: "<a:HFGem:810971356086534175> Gems",
          value: user.economy.money.toLocaleString(),
          inline: true
        },
        {
          name: "Bank",
          value: user.economy.bank.toLocaleString(),
          inline: true
        }
      )
      .setTitle(`${user.economy.user.tag} Balance`)
    }
    
    msg.channel.send(em)
  }
  
}

module.exports = BalanceCommand;