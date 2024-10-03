export async function before(m) {
    this.autosholat = this.autosholat ? this.autosholat : {};
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender;
    let name = await this.getName(who);
    let id = m.chat;
    if (id in this.autosholat) {
        return false;
    }
    let jadwalSholat = {
        الفجر: "04:17",
        الشروق: "06:34",
        الظهر: "1:10",
        العصر: "4:26",
        المغرب: "7:46",
        العشاء: "9:13"
    };
    const date = new Date(new Date().toLocaleString("en-US", {
      timeZone:"Africa/Cairo"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
            let caption = `حان موعد صلاة *${sholat}* اذهب و توضأ بسرعة و قم لصلاتك  ولا تنسانا من الدعاء.\n\n*${waktu}*\nهذا توقيت الصلاة في فلسطين`;
            this.autosholat[id] = [
                this.reply(m.chat, caption, null),
                setTimeout(() => {
                    delete this.autosholat[id];
                }, 57000)
            ];
        }
    }
}