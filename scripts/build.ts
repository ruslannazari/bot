import { bot } from '../src/bot'

const {
    VERCEL_URL: host,
    // set your webhook address or use default Vercel deployment url
    WEBHOOK: webhook = `https://${host}/api/webhook`,
} = process.env

console.log(webhook)

void bot.api.setWebhook(webhook)
