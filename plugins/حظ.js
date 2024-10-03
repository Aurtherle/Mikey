let reg = 40
let handler = async (m, { conn, args, usedPrefix, command }) => {
  /* if (global.db.data.users[m.sender].level < 5) {
        return conn.reply(m.chat, 'You must be at least level 5 to use this command.', m);
    }*/

  let fa = `🟥 *ضع رقما للرهان*

*مثال :
${usedPrefix + command} 500*`.trim()
  if (!args[0]) throw fa
  if (isNaN(args[0])) throw fa
  let amount = parseInt(args[0])
  m.react('🎰')
  let users = global.db.data.users[m.sender]
  let time = users.lastslot + 10000
  if (new Date() - users.lastslot < 10000)
    throw `⏳ Wait *${msToTime(time - new Date())}* to use again`
  if (amount < 500) throw `🟥 *لا يمكنك الرهان باقل من 500*`
  if (users.credit < amount) {
    throw `🟥 *ليس لديك الذهب الكافي*`
  }
  if (amount > 100000) throw `🟥 *لا يمكنك الرهان باكثر من 100000*`

  let emojis = ['🕊️', '🦀', '🦎']
  let a = Math.floor(Math.random() * emojis.length)
  let b = Math.floor(Math.random() * emojis.length)
  let c = Math.floor(Math.random() * emojis.length)
  let x = [],
    y = [],
    z = []
  for (let i = 0; i < 3; i++) {
    x[i] = emojis[a]
    a++
    if (a == emojis.length) a = 0
  }
  for (let i = 0; i < 3; i++) {
    y[i] = emojis[b]
    b++
    if (b == emojis.length) b = 0
  }
  for (let i = 0; i < 3; i++) {
    z[i] = emojis[c]
    c++
    if (c == emojis.length) c = 0
  }
  let end
  if (a == b && b == c) {
    end = `🎊 *لقد ربحت!*لقد فزت ب ${amount + amount} ذهبه`
    users.credit += amount + amount
    // } else if (a == b || a == c || b == c) {
    //     end = `You lost  *₹${amount}*\n*But you almost made it keep trying*`
    //     users.credit -= amount
  } else {
    end = `      لقد خسرت ${amount} ذهبه`
    users.credit -= amount
  }
  users.lastslot = new Date() * 1
  return await m.reply(
    `
     🎰 ┃ *العجلة* ┃ 🎰
     ───────────
         ${x[0]} : ${y[0]} : ${z[0]}
         ${x[1]} : ${y[1]} : ${z[1]}
         ${x[2]} : ${y[2]} : ${z[2]}
     ───────────     
${end}`
  )
}
handler.help = ['slot <amount>']
handler.tags = ['game']
handler.command = ['حظ']

handler.group = true

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  return seconds + ' seconds'
}