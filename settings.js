//Ubah Image/Thumbnail di folder maslent/pplent/maslent.png (Cari fotomu Ubah namnya ganti jadi maslent.png trus di gantu make pp mu yang baru

const fs = require('fs')
const chalk = require('chalk')
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//==============================\
autoread = true
global.footer = 'AI'//ganti
global.pulsa = "6283867149253"//ganti
global.gopay = "6283867149253"//ganti
global.dana = "6283867149253"//ganti
global.paypal = "---" // biarin aja kalau gaada
global.shopay = "---" // biarin aja kalau gaada
global.saweria = "---" // biarin aja kalau gaada
global.sociabus = "---" // biarin aja kalau gaada
global.bni = "---" // biarin aja kalau gaada
global.bri = "---" // biarin aja kalau gaada
global.bankjatim = "---" // biarin aja kalau gaada
global.jago = "---" // biarin aja kalau gaada
global.neobank = "---" // biarin aja kalau gaada
global.packname = 'OPENAI'//ganti
global.footer = '©xell'//ganti
global.ovo = "6283867149253"//ganti
global.ownerlen = "Xell/rhmt"//Ubah
global.owner = ['6283867149253'] //ubh nomor owner hp
global.ownername = "Xell" //ubah
global.ytname = "YT: RhmtEditz"//ubah
global.socialm = "IG: rhmt.editz"//ubah
global.location = "Indonesia, JawaTengah, Klaten"//ubah
global.ownernomer = "6283867149253"//ubah nomorhp owner
global.premium = ['6283867149253']//ubah nomor hp premium
global.nomorcs = '6283867149253'
global.botname = 'XellBot AI' //ubah
global.linkz = "https://chat.whatsapp.com/KQZNBa0kpoh2VUjoq0S7EQ"//ubah
global.websitex = "https://youtube.com/@RhmtEditz"//ubah
global.botscript = '-'
global.themeemoji = "💪🏿"//ubah
global.packname = " "//ubah
global.author = " "//ubah
global.wm = " "//ubah
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Piye?!', //ubah...
    admin: 'Fitur ini hanya dapat digunakan oleh admin!',
    botAdmin: 'Bot Harus Jadi Admin Dulu!',
    premime: 'Fitur Khusus Premium Jika Ingin Mendaftar Jenis Sewa',
    owner: 'Fitur ini hanya dapat digunakan oleh owner',
    group: 'Fitur Hanya Digunakan Untuk Grup!',
    private: 'Fitur yang Digunakan Hanya Untuk Obrolan Pribadi!',
    bot: 'Fitur ini hanya dapat digunakan oleh bot',
    wait: 'Dalam proses...',
    linkm: 'Di mana tautannya?',
    endLimit: 'Upss Limit Kamu sudah habis..Tunggu Waktu menunjukan Pukul 12:00 Limit Anda otomatis akan Di reset!!!',
    nsfw: 'Astagfirullah....👀',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thum = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.log0 = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.err4r = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.thumb = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
