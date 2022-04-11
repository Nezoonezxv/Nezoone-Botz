"use strict";
const fs = require("fs");
const moment = require("moment");
const speed = require("performance-now");
var osu = require('node-os-utils');
var cpu = osu.cpu;
let m = require('moment-duration-format'),
    os = require('os'),
    cpuStat = require('cpu-stat'),
    ms = require('parse-ms'),
    toMs = require('ms'),
    parse_ms = require('parse-ms')   
simple.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	simple.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                          
	simple.on("CB:action,,battery", (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batteryLevel = parseInt(batteryLevelStr);
    battery.persen = `${batteryLevel}%`;
    battery.charger = json[2][0][1].live;
  });

//////By FLooper//////
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
module.exports = async (conn) => {
//status live
    try {
        setInterval(async function () {
            var botNumber = conn.user.jid
            if (conn.user.jid !== conn.user.jid) return;
            cpu.usage().then(info => {
var usage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
conn.setStatus(`| Ram : ${usage} | CPU : ${info+"%"} | Battery : ${battery} [${isCharge}]`)
})
        }, 17000);
    } catch (e) {
        console.log(e);
        }

//clear automatic
/*setInterval(async function () {
conn.setMaxListeners(5)
for (let _ of await conn.chats.all()) {
conn.modifyChat(_.jid, 'clear', {
includeStarred: false
})
}
}, 1000000)*/

//waktu expert
setInterval(async function () {
ban.expiredCheck()
}, 1000)
};