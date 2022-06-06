const { Command }= require('discord-akairo');
const Discord = require('discord.js');

class DepositCommand extends Command {
  constructor() {
    super("deposit", {
      aliases: ['deposit', 'depo'],
      cooldown: 10000,
      ratelimit: 2,
      category: 'Economy'
    })

    this.name = "deposit"
    this.decription = "Save your money in the bank"
    this.usage = "deposit <amount>"
    this.example = "deposit 1000"
  }

  exec(msg) {
    let args = msg.content.slice(msg.guild.prefix).trim().split(/ +/).slice(1)
    let amount = args[0]
    
    if(!amount) return msg.channel.send("Please specify the amount of gems to deposit!")
    if(msg.member.economy.money < amount) return msg.channel.send("You dont have "+ amount + " gems in your account")
    else if(msg.member.economy.money < 0) return msg.channel.send("You have 0 gems in your account")

    msg.member.removeMoney(amount)
    msg.member.setBank(amount)
    let em = new Discord.MessageEmbed()
    .setTitle(msg.author.tag)
    .setColor('#FF7300')
    .setDescription(`Saving **${amount}** <a:HFGem:810971356086534175> in your bank account. \nYou now have ${msg.member.economy.money} gems in your wallet`)
    .setTimestamp()
    .setFooter('Hamtaro | Made With ❤️ By papernecklace')

    msg.channel.send(em)

  }

}

module.exports = DepositCommand;