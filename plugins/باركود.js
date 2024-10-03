import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `*حط النص االي عايز تحولو لكود بعد الامر*\n\n*مثال*\n\n*.كود شادو بوت*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', 'BY:𝐵𝛩𝑇 SHADOW', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?|كود|باركود$/i
export default handler
