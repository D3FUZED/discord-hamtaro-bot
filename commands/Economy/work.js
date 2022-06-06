const { Command } = require("discord-akairo");
const ms = require("parse-ms");

class WorkCommand extends Command {
  constructor() {
    super("work", {
      aliases: ["work", "w"],
      cooldown: 3,
      category: 'Economy'
    })
    
    this.name = "work"
    this.description = "earn gems"
    this.usage = "work"
    this.example = "work"
  }
  
  exec(msg) {
    let cold = this.client.db.get(`economy.${msg.guild.id}.${msg.author.id}.cooldown`)
    let timeout = 600000;
    let cooldown = timeout - (Date.now() - cold)
    if(cooldown > 0) {
      let time = ms(cooldown)
      
      return msg.channel.send(`You're tired! Please wait **${time.minutes}m ${time.seconds}s**.`)
    } else {
      let earn = Math.floor(Math.random() * 50) + 1
      msg.member.setMoney(earn)
      msg.channel.send(`You worked and earned <a:HFGem:810971356086534175> \`${earn}\` gems.`)
    }
    
    this.client.db.set(`economy.${msg.guild.id}.${msg.author.id}.cooldown`, Date.now())
  }
}

module.exports = WorkCommand;