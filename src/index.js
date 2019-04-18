const cron = require("node-cron");
const express = require("express");
let shell = require("shelljs");

app = express();

// cron job executando de 30 em 30 segundos
// * * * * * = minuto a minuto
// cada duas horas = 0-23/2 na segunda *
// teste = https://crontab.guru/#0_0-23/2_*_*_*

cron.schedule("* * * * *", function () {
    shell.exec();
    console.log("Executando a tarefa a cada 1 minuto");
});

app.listen(1313);

// pm2 restart all
// pm2 stop DOWNLOADER
// 