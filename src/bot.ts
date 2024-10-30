import { Bot, Context } from 'grammy'

const {
    BOT_TOKEN: token = '',
} = process.env

// Set your token in the vercel environment variable
export const bot = new Bot(token)

bot.command("start", async (ctx:Context)=>{
    ctx.reply("Привет, это бот на TS)")
})
// attach all middleware
bot.on('message', async ctx => {
    await ctx.reply(ctx.message.text!)
})
