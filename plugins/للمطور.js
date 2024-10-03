let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗تحذير❗] ادخل رسالتك و بلاغك*\n\n*مثال:*\n*${usedPrefix + command} مرحباً سيدي مايكي${usedPrefix}كيف اخبارك*`
if (text.length < 10) throw `*[❗تحذير❗] الرساله لا يقل عن عشرة احرف*`
if (text.length > 1000) throw `*[❗تحذير❗] الرساله لا يزيد عن الف حرف*`
let teks = `*❒═════[رسالة مهمة]═════❒*\n*┬*\n*├❧ الرقم:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ الرساله:* ${text}\n*┴*`
conn.reply('972512997441@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply('@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply(`*[ ✔️ ]ارجو منك الانتظار حتى يتم الرد عليك*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(للمطور)$/i
export default handler
