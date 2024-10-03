import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
import moment from 'moment-timezone';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    const time = moment.tz('Africa/Egypt').format('HH');
    let wib = moment.tz('Africa/Cairo').format('HH:mm:ss');
    let date = new Date().toLocaleDateString('en-EG', { day: 'numeric', month: 'long', year: 'numeric' });
    const mentionId = m.key.participant || m.key.remoteJid;

    await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } });

    // قائمة عناوين URL للصور
    const images = [
        'https://telegra.ph/file/ac04a53e91eeb841a6ef4.jpg',
        'https://telegra.ph/file/ec6b8e0bcee7a203cadd3.jpg',
        'https://telegra.ph/file/dc2e0602a95833d4adc7b.jpg'  // أضف عنوان URL ثالث هنا
    ];

    // اختيار عشوائي لعنوان URL من القائمة
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // إعداد رسالة الوسائط
    var messa = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });

    const lol = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊ ${m.pushName} ⌉*
── • ◈ • ──

┏━━🤖 *『』ī معلومات البوت ī《* 🤖━━┓
┃ ✨  *اسـم البـوت: MAIKY 𝑩𝒐𝒕*
┃ 💻  *المـنصـة:*مش مهم تعرف😏  
┃ 📍  *رقم المطور: 972512997441*
┃ 📚  *اسم المطور: 『محمد』* 
┗━━━━━━━━━━━━━┛

┏━━⏰ *『』التاريخ والوقت《* ⏰━┓
┃ 📆  *تـاريـخ اليـوم:* 『』${date}《 
┃ ⏲️  *الـوقـت الـحالـي:* 『』${wib}《 
┗━━━━━━━━━━━━━┛
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢`
                    },
                    footer: {
                        text: 'محمد'
                    },
                    header: {
                        title: '',
                        hasMediaAttachment: true,
                        imageMessage: messa.imageMessage,
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '『』CLICK《',
                                    sections: [
                                        {
                                            title: '『』MENUS《',
                                            highlight_label: 'OWNER',
                                            rows: [
                                                {
                                                    header: 'info',
                                                    title: '⌬ ❛╏المطور',
                                                    description: '',
                                                    id: '.المطور'
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏التنزيلات',
                                                    description: '',
                                                    id: '.4',
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏قائمه الجروب',
                                                    description: '',
                                                    id: '.5',
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏الالعاب',
                                                    description: '',
                                                    id: '.6',
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏الترفيه',
                                                    description: '',
                                                    id: '.6',
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏الصور',
                                                    description: '',
                                                    id: '.2',
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏شروط',
                                                    description: '',
                                                    id: '.20',
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '⌬ ❛╏الدعم',
                                                    description: '',
                                                    id: '.الدعم',
                                                },
                                                {
                                                    header: '『』All MENU《',
                                                    title: '⌬ ❛╏قائمة الاوامر',
                                                    description: '',
                                                    id: '.10',
                                                },
                                            ]
                                        }
                                    ]
                                }),
                                messageParamsJson: 'MAIKY bot'
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: "{\"display_text\":\"『』OWNER《\",\"id\":\".المطور\"}"
                                },
                                {
                                    name: "cta_url",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "『』CHANNEL《",
                                        url: "https://whatsapp.com/channel/0029Vafd5a23wtbEqjlnbw1l",
                                        merchant_url: "https://whatsapp.com/channel/0029Vafd5a23wtbEqjlnbw1l",
                                },
                                {
                                name: "cta_url",
                                buttonParamsJson: "{\"display_text\":\"『』WEBSITE《\",\"url\":\"https://www.atom.bio/maiky-bot////\",\"merchant_url\":\"https://www.atom.bio/maiky-bot////\"}"
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "『』CHANNEL《",
                                    url: "https://whatsapp.com/channel/0029Vafd5a23wtbEqjlnbw1l",
                                    merchant_url: "https://whatsapp.com/channel/0029Vafd5a23wtbEqjlnbw1l"
                                })
                            }
                        ]
                    }
                }
            }
        }
    }, {});
conn.relayMessage(m.chat, lol.message, { messageId: lol.key.id});

}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['لول'];

export default handler;
