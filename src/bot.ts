import { Bot, Context } from 'grammy'

const {
    BOT_TOKEN: token = '',
} = process.env

// Set your token in the vercel environment variable
export const bot = new Bot(token)

bot.command("start", (ctx:Context)=>{
    ctx.reply("Привет, это бот на TS)")
})
// attach all middleware
bot.on('message', ctx => {
    ctx.reply(ctx.message.text!)
})
