import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg

var handler = async (m, { conn, usedPrefix }) => {
const tips = [
  'اللهم وفقني ووفق احبائي واعزائي.',
  'ربي ارزقني عملا صالحا اتقرب به لك.',
  'ربي اهدني وارزقني وابعد عني المنكرات والمحرمات.',
  'رب اسألك رضاك والجنه واعوذ بك من سخطك والنار.',
  'رب ارزقني الشهادة والموت في سبيلك.',
  'رب انصر اهلنا في غزة وصبرهم وتقبل شهدائهم.',
  'رب اخسف الارض بالكافرين كما خسفتها في قوم لوط.',
  'يا ربي اغفر لي كل ذنوبي وارفع مقامي عندك.',
  'رب ارزقني طول الصبر مثل سيدنا ايوب.',
];
/ *const randomImage = hekma[Math.floor(Math.random() * hekma.length)];
const url = ['https://telegra.ph/file/a69f4e9cf361408214a3b.jpg', 
             'https://telegra.ph/file/995e4fe8d4371d4a9693b.jpg', 
             'https://telegra.ph/file/f7a08e8795b30c396120d.jpg', 
             'https://telegra.ph/file/a1e458b7b401438c4d042.jpg', 
             'https://telegra.ph/file/bf83eff9c3ac97ae622f6.jpg', 
             'https://telegra.ph/file/95b96de8542d96ac3523b.jpg', 
             'https://telegra.ph/file/46f96abe2d0486290a40f.jpg', 
             'https://telegra.ph/file/636f8e455d8d8263ec80b.jpg'
             ];*/
  const randomImage = tips[Math.floor(Math.random() * tips.length)];
   var messa = await prepareWAMessageMedia({ image: { url:'https://telegra.ph/file/37eac8ce5264c2f047759.jpg' } }, { upload: conn.waUploadToServer });
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${randomImage}*\n*⊱─═⪨༻𓆩⚡𓆪༺⪩═─⊰*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "MAIKY 𝑩𝒐𝒕"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*⊱⪨༻𓆩〘 نــــصــائـــــح 💗〙𓆪༺⪩⊰*",
            subtitle: "",
            hasMediaAttachment: true, 
            imageMessage: messa.imageMessage, 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
               name: "quick_reply",
               buttonParamsJson:JSON.stringify({
                 "display_text":"التالي","id":".نصيحه" 
                })
               }, 
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"الدعم\",\"id\":\".الدعم\"}"
               } 
              ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

} 
handler.tags = ['frasss'];
handler.command = ['دعاء','ادعيه'];
export default handler; 
