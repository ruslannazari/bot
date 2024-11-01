import { bot } from '../src/bot'

bot.init()


const {
    VERCEL_URL: host,
    // set your webhook address or use default Vercel deployment url
    WEBHOOK: webhook = `https://${host}/api/webhook`,
} = process.env

bot.catch(console.error)

console.log(webhook)
console.log(process.env.BOT_TOKEN)

bot.api.setWebhook(webhook)
console.log("Done")
console.log(bot.api.token)