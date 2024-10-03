import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*فين النص*`;

  try {
    m.react('❄');
    var apii = await fetch(`https://aemt.me/bard?text=${text}`);
    var res = await apii.json();

    await conn.sendFile(m.chat, 'https://telegra.ph/file/0585e66d6c6af709b1cae.jpg', 'image.png', res.result, m);

  } catch (error) {
    console.error(error);
    throw '*ايرور*';
  }
};

handler.command = ['بارد'];
handler.help = ['bard'];
handler.tags = ['herramientas'];
handler.premium = false;

export default handler;
