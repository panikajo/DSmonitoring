const {Client} = require("discord.js");
const bot = new Client();
const gamedig = require('gamedig');
async function online() {
	gamedig.query({type: 'dayz', host: 'тутИП', port: 'тутПорт'
		}).then((state) => {
			bot.user.setActivity(`🎮 Онлайн: ${state.raw.numplayers}/${state.maxplayers}`, {type: 0});
		}).catch((error) => {
			bot.user.setActivity(`🎮 Сервер offline`, {type: 0});
		});
}
bot.login("token")
bot.on('ready', async () => {
	console.log('BOT UP')
	online()
	setInterval(online, 10000)
});