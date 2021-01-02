const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1361786282:AAEM7QZyEKHMhbsc-qwFaVT4bKQ6J5P9E1g'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message',msg=>{
bot.sendMessage(msg.chat.id,'"hi,${msg.from.first_name}"')
})