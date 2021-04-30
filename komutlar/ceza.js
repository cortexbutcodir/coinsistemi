const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");
const moment = require("moment");

exports.run = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let puan = db.fetch(`puan.${message.guild.id}`)
if(!puan) return message.channel.send("Sunucunuzun Ceza Puanı Ayarlanmamış")
  if (!member) return message.channel.send("Üye Etiketle <3 Serendia");

  let sebep = args.slice(1).join(" ");
  if (!sebep) return message.reply("Sebep Girmelisin");

  db.push(`jail.${member.id}`, {
    giren: member,
    atan: message.author.id,
    sebep: sebep
  });

  let sayı = db.fetch(`jailsayı.${message.guild.id}`) || 0;
  db.add(`jailsayı.${message.guild.id}`, 1);
  db.add(`yetkilipuan.${message.author.id}`, puan);
  const embed = new Discord.MessageEmbed()
    .setColor("#ff000")
     //Cortex Tarafından Kodlanmıştır
    .setDescription(`Bir Üye Jaile Atıldı (\`#${sayı}\`)`);
  message.reply(embed);
};
exports.conf = {
  aliases: []
};
exports.help = {
  name: "jail"
};
