let handler = async (m, { conn, usedPrefix, text, command }) => {
  let waLin = ''
  if (text) {
    waLin = text.replace(/[^0-9]/g, '')
  } else if (m.quoted) {
    waLin = m.quoted.sender.replace(/[^0-9]/g, '')
  } else if (m.mentionedJid && m.mentionedJid[0]) {
    waLin = m.mentionedJid[0].replace(/[^0-9]/g, '')
  } else {
    throw `الرجاء ادخال رقم صحيح لاعطاء لينك للرقم`
  }
  const waLink = `https://wa.me/${waLin}`
  const message = `*لينك الواتس اب الذي طلبته:*\n${waLink}`

  conn.sendMessage(m.chat, { text: message, quoted: m, contextInfo: { mentionedJid: [m.sender] } })

  await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })

}

handler.help = ['wa']
handler.tags = ['tools']
handler.command = ['وتساب']

export default handler
