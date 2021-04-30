const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async(client , message , args) => {
   let puan = db.fetch(`yetkilipuan.${message.author.id}`)
  const embed = new Discord.MessageEmbed()
  .setDescription("Haftalık Puanın")
  .setFooter(`${puan}`)
  message.channel.send(embed)
}
exports.conf = {
  aliases: []
};
exports.help = {
  name: "stat"
}