let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Pulsa +5k
╠➥ Cht Owner
║
╠═〘 Fitur 〙 ═
║
╠➥ *FITUR WELCOME*
║    *FITUR STIKER*
╠➥ *FITUR ADMIN*
║    *KICK ORANG*
║    *JADIIN ADMIN*
╠➥ *FITUR ISLAM*
║   *QURAN*
║   *CEK JADWAL SHALAT*
╠➥ *INTERNET*
║   *BRAINLY*
║   *GOOGLE*
╠➥ *DAN 200 LEBIH*
║   *FITUR LAINNYA*
║ 
╠═ ©2021 Rpg NECTT-BOT
╠═ Scrip original by Akli
╠═〘 NECTT 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '6288290013973@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viapulsa']
handler.tags = ['info']
handler.command = /^viapulsa$/i

module.exports = handler
