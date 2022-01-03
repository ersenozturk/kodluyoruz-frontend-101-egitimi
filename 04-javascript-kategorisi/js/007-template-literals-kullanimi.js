// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

let info = `
Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}.
`

let ders = "Fizik"
const konu = "aynalar"

let içerik = ders + " dersimizin bu haftaki konusu " + konu +" dır"
console.log(içerik)

let olay = `
en zorlandoğım ders ${ders},
en sıkıcı konu ${konu}
${ders} toplam uzunluğu ${ders.length} dir
${new Date().getMinutes()}
`
console.log(olay)
let eskiString = "En sevdiğim yemekler:\n\tİskender\nMantı"
console.log(eskiString)