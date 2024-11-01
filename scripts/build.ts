import { bot } from '../src/bot'

bot.init()
console.info('Info:', bot.botInfo)

const {
    VERCEL_URL: host,
    // set your webhook address or use default Vercel deployment url
    WEBHOOK: webhook = `https://${host}/api/webhook`,
} = process.env

bot.catch(console.error)

console.log(webhook)
console.log(process.env.BOT_TOKEN)

bot.api.setWebhook(webhook)
const data = bot.api.getWebhookInfo()

console.log('Webhook set to URL:',data)