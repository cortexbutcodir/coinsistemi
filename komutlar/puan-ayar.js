const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async(client , message , args) => {
  if(args[0] === "ayarla") {
  let puansayı = args[1]
  if(!puansayı) return message.channel.send("İşlem Başına Verilecek Puan Sayısını Gir")
    db.set(`puan.${message.guild.id}`, puansayı)
    message.channel.send("Puan Sayısı **"+ puansayı +"** Olarak Ayarlandı")
  }
  //CORTEX WAS HERE!
    if(args[0] === "sıfırla") {
    db.delete(`puan.${message.guild.id}`)
    message.channel.send("Puan Sayısı Sıfırlandı")
  }
  
}
exports.conf = {
  aliases: []
};
exports.help = {
  name: "puan"
}