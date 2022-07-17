const Discord = require('discord.js');
const fs = require('fs');
const cooldown = new Set();

module.exports.run = async (client, msg, args, config) => {
    if(cooldown.has(msg.author.id)) {
        msg.reply(`You need to wait ${config.COOLDOWN} minutes to use this command again!`)
            .then((m) => {
                msg.delete();

                setTimeout(() => {
                    m.delete();
                }, 5000);
            });
    } else {
        fs.readFile('./accounts/roblox.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/roblox.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

            let embed = new Discord.MessageEmbed()
            .addField('Account Generator', `https://discord.gg/E5t2YqRJBm`)
            .addField('Roblox Account',`\n**${account}**`)
            .setColor("#ffffff")
            .setFooter('Bot made by ZOMG#6043')
            .setTimestamp();

            msg.author.send(embed);

var xd = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("CHECK YOUR DM")
        .setThumbnail("https://th.bing.com/th/id/R.a1c844c311b19a93a94d5eab273d7ab9?rik=NCREq5SEuaWx6w&riu=http%3a%2f%2fwww.rw-designer.com%2ficon-image%2f21521-256x256x32.png&ehk=stiac%2b%2bMa32YZd%2fF0Iy4%2bwEm75PDPoPgEvqn%2f7spyQQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1")
        .setFooter("Account Generator @2022")
        .setTimestamp()
        .setDescription("I've sent you 1 Roblox Account!")

                
msg.reply(xd).then(m => {
                    setTimeout(() => {
                    }, 900000);
                });

	
            cooldown.add(msg.author.id);
            setTimeout(() => {
                cooldown.delete(msg.author.id);
            }, config.COOLDOWN * 60 * 1000);
		});
    }
};

module.exports.help = {
    name: `gen roblox`,
    description: `Sends you a roblox Account!`
};

//we love medium games