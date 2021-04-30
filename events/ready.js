const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
1
module.exports = client => {
var oyun = [
        "Serendia Proje",
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "Serendia Proje" );
        }, 2 * 2500);
    
  client.user.setStatus("online");
  client.user.setActivity(`Serendia Proje`);

}; 