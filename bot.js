const express = require("express");
const http = require("http");
const app = express();
app.listen(process.env.PORT);
app.get("/", (request, response) => {
response.sendStatus(200);
});
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 5000);
const Discord = require("discord.js");
const db = require('quick.db')
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);


var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]HypeR Artz Register ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`Yüklenecek Komut Sayısı ${files.length}`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Komut İsmi = ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//Cortex tarafından kodlanmıştır !
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
//Cortex was here
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});



client.on("message", async message => {
 let puan = db.fetch(`yetkilipuan.${message.author.id}`)
 if(puan => 100) {
   message.member.roles.add("Verilecek_Rol_Id").catch(e => { })
 } else return;
});

client.on("message", async message => {
 let puan = db.fetch(`yetkilipuan.${message.author.id}`)
 if(puan => 200) {
   message.member.roles.add("Verilecek_Rol_Id").catch(e => { })
 } else return;
});;

client.on("message", async message => {
 let puan = db.fetch(`yetkilipuan.${message.author.id}`)
 if(puan => 300) {
   message.member.roles.add("Verilecek_Rol_Id").catch(e => { })
 } else return;
});




//Cortex Tarafından Kodlanmıştır !
client.login(ayarlar.token);