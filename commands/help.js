const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Account Generator Help')
	.setURL('https://discord.gg/E5t2YqRJBm')
	.setAuthor('$Medium Games', 'https://th.bing.com/th/id/R.a1c844c311b19a93a94d5eab273d7ab9?rik=NCREq5SEuaWx6w&riu=http%3a%2f%2fwww.rw-designer.com%2ficon-image%2f21521-256x256x32.png&ehk=stiac%2b%2bMa32YZd%2fF0Iy4%2bwEm75PDPoPgEvqn%2f7spyQQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', 'https://discord.gg/E5t2YqRJBm')
	.setDescription('Commands: \n $gen-roblox ')
	.setThumbnail('https://th.bing.com/th/id/R.a1c844c311b19a93a94d5eab273d7ab9?rik=NCREq5SEuaWx6w&riu=http%3a%2f%2fwww.rw-designer.com%2ficon-image%2f21521-256x256x32.png&ehk=stiac%2b%2bMa32YZd%2fF0Iy4%2bwEm75PDPoPgEvqn%2f7spyQQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1')
	.setTimestamp()
	.setFooter('Account Generator @2022');

message.channel.send(embed);
}
module.exports.help = {
  name: 'help'
}
