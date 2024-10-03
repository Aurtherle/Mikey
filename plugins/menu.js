let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`
*➻𒍜➻Đ『➳ᴹᴿMikey➳ᴹᴿ』*
*⌬ ❛╏ بان*
*⌬ ❛╏ بانفك*
*⌬ ❛╏ بريم*
*⌬ ❛╏ حذف_بريم*
*⌬ ❛╏ حظر*
*⌬ ❛╏ فك_الحظر*
*⌬ ❛╏ رستر*
*⌬ ❛╏ ضيف_اكسبي*
*⌬ ❛╏ ادخل*
*⌬ ❛╏ اخرج*
*⌬ ❛╏ بانشات*
*⌬ ❛╏ بانشات_فك*
*⌬ ❛╏ بلوك*
*⌬ ❛╏ فك_بلوك*
 *➻𒍜➻Đ『➳ᴹᴿMikey➳ᴹᴿ』*`

await conn.sendMessage( m.chat, {
        image: {
          url: 'https://telegra.ph/file/7d9124fba5bf0bffa11c2.jpg'
       },
        caption: caption,
        gifPlayback: true,
        gifAttribution: Math.floor( Math.random( ) * 2 ) + 1
      }, {
        quoted: m
      } );
}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['قائمتي'] 
handler.rowner = true

export default handler
