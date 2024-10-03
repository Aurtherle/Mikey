let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  let name = conn.getName(m.sender);
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  let message = `
*⟣𓆩༺ 𝙈𝘼𝙄𝙆𝙔 𝑩𝒐𝒕 ❄ ༻𓆪⟢* 
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈⟢
*༺ مـنـــور يــاقــلـبـي 〘 ${m.pushName} 〙༻*
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈⟢
*هاذا دعم بوت شادو يمكنك ارسال رساله للمطور عن طريق امر .للمطور*

*جروب دعم البوت*
https://chat.whatsapp.com/LmsirumJ3n6IbqIUG6x8F4

*قناة البوت*
https://whatsapp.com/channel/0029Vafd5a23wtbEqjlnbw1l
        *⟣𓆩༺ 𝙈𝘼𝙄𝙆𝙔 𝑩𝒐𝒕 ༻𓆪⟢*

⟣┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
`;

conn.sendFile(m.chat, 'https://telegra.ph/file/f592fb4156dc3c7c306a0.jpg', 'image.jpg', message, m);
};

handler.command = /^(الدعم|دعم)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;


