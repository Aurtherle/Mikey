import pkg from '@whiskeysockets/baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '☠', key: m.key } });

    const harley = 'https://telegra.ph/file/bce5cac9f8e6b7ec07c21.jpg';

    let messageContent = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: 'SHADOW' },
                    body: {
                        text: `━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━
> SHADOW↳☠↲𝐁𝐎𝐓
> 〔 شراء السكريبتات┊ ˼‏ 🚀˹ ↶〕
*⋅ ───━ •↳☠↲• ━─── ⋅*
            *𝗕𝗢𝗧 SHADOW*
*⋅ ───━ •↳☠↲• ━─── ⋅*
╗───¤﹝بوت شادو المتميز ↶ 💵﹞
> •┊˹⛈️˼┊- رقمين حقيقيين
> •┊˹⛈️˼┊- قناة فوق 200 متابع
> •┊˹⛈️˼┊- روبل بوت ارقام
╝───────────────¤
╗───¤﹝بوت دراكن المتميز ↶ 🚀﹞
> •┊˹⛈️˼┊- رقمين حقيقيين
> •┊˹⛈️˼┊- قناة فوق 300 متابع
> •┊˹⛈️˼┊- روبل بوت ارقام
╝───────────────¤
╗───¤﹝طرق الدفع ↶ 💰﹞
> •┊˹⛈️˼┊- ⌈🚀╎𝐁𝐔𝐘 ˹💰˼ 𝐍𝐎𝐖╎🚀⌋اضغط على 
╝───────────────¤
*⋅ ───━ •↳☠↲• ━─── ⋅*
> 〔تـوقـيـع┊ ˼‏📜˹ 〕↶
⌠SHADOW↳☠↲𝐁𝐎𝐓⌡
*⋅ ───━ •↳☠↲• ━─── ⋅*`,
                        subtitle: "SHADOW"
                    },
                    header: {
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({ image: { url: harley } }, { upload: conn.waUploadToServer }, { quoted: m }))
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈🚀╎𝐁𝐔𝐘 ˹💰˼ 𝐍𝐎𝐖╎🚀⌋","url":"https://api.whatsapp.com/send?phone=+972512997441","merchant_url":"https://api.whatsapp.com/send?phone=+972512997441"}'
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://www.whatsapp.com/channel/0029Vafd5a23wtbEqjlnbw1l","merchant_url":"https://www.whatsapp.com/channel/0029Vafd5a23wtbEqjlnbw1l"}'
                            }
                        ]
                    }
                }
            }
        }
    };

    conn.relayMessage(m.chat, messageContent, {});
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['سكربتس'];

export default handler;
