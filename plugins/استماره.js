let handler = async (m, { command, text }) => m.reply(`
https://chat.whatsapp.com/J60CrfPN2TZ2dtPJPlsyR
`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(جروبي)$/i

export default handler
