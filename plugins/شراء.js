const items = ["dim", "exp"];
let confirmation = {};

async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender])
        return m.reply("estas haciendo una transferencia");
    let user = global.db.data.users[m.sender];
    const item = items.filter((v) => v in user && typeof user[v] == "number");
    let lol = `✳️ الاستخدام الصحيح للامر 
*${usedPrefix + command}*  [النوع] [كميه] [@user]

📌 Contoh : 
*${usedPrefix + command}* exp 65 @${m.sender.split("@")[0]}

📍 العناصر القابلة للتحويل
┌──────────────
▢ *dim* = الماس 💎
▢ *exp* = اكس بي 🆙
└──────────────
`.trim();
    const type = (args[0] || "").toLowerCase();
    if (!item.includes(type))
        return conn.reply(m.chat, lol, m, { mentions: [m.sender] });
    const count =
        Math.min(
            Number.MAX_SAFE_INTEGER,
            Math.max(1, isNumber(args[1]) ? parseInt(args[1]) : 1),
        ) * 1;
    let who =
        m.mentionedJid && m.mentionedJid[0]
            ? m.mentionedJid[0]
            : args[2]
              ? args[2].replace(/[@ .+-]/g, "") + "@s.whatsapp.net"
              : "";
    if (!who) return m.reply("✳️ علامة المستخدم");
    if (!(who in global.db.data.users))
        return m.reply(`✳️ المستخدم غير موجود في قاعدة البيانات الخاصة بي`);
    if (user[type] * 1 < count)
        return m.reply(`✳️  *${type}*  لا يكفي لنقل`);
    let confirm = `
هل أنت متأكد أنك تريد النقل *${count}* _*${type}*_ a  *@${(who || "").replace(/@s\.whatsapp\.net/g, "")}* ? 

حصلت على *60 ثانية*
_الرد *نعم* أو *لا*_
`.trim();

    //conn.sendButton(m.chat, confirm, fgig, null, [['نعم'], ['لا']], m, { mentions: [who] })
    m.reply(confirm, null, { mentions: [who] });
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(
            () => (
                m.reply("⏳ انتهى الوقت"), delete confirmation[m.sender]
            ),
            60 * 1000,
        ),
    };
}

handler.before = async (m) => {
    if (m.isBaileys) return;
    if (!(m.sender in confirmation)) return;
    if (!m.text) return;
    let { timeout, sender, message, to, type, count } = confirmation[m.sender];
    if (m.id === message.id) return;
    let user = global.db.data.users[sender];
    let _user = global.db.data.users[to];
    if (/لا?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout);
        delete confirmation[sender];
        return m.reply("✅تم إلغاء النقل");
    }
    if (/نعم?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1;
        let _previous = _user[type] * 1;
        user[type] -= count * 1;
        _user[type] += count * 1;
        if (previous > user[type] * 1 && _previous < _user[type] * 1)
            m.reply(
                `✅ تحويل \n\n*${count}* *${type}*  a @${(to || "").replace(/@s\.whatsapp\.net/g, "")}`,
                null,
                { mentions: [to] },
            );
        else {
            user[type] = previous;
            _user[type] = _previous;
            m.reply(
                `❎ إعادة توجيه الخطأ *${count}* ${type} a *@${(to || "").replace(/@s\.whatsapp\.net/g, "")}*`,
                null,
                { mentions: [to] },
            );
        }
        clearTimeout(timeout);
        delete confirmation[sender];
    }
};

handler.help = ["transfer"].map((v) => v + " [tipo] [monto] [@tag]");
handler.tags = ["econ"];
handler.command = ["payxp", "payall", "شراء", "تحويل", "dardi"];

handler.disabled = false;

export default handler;

function isNumber(x) {
    return !isNaN(x);
}
