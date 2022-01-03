// DOM
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// pathname
console.log(document.location.pathname)

// head icindeki bilgiler
console.log(document.head)

// body icindeki bilgiler
console.log(document.body)

// url bilgisi
console.log(document.URL)
console.log(document.baseURI)


// document icerisinde style bilgilerini degistirmek:
// css bilginizle birlikte style yapisi uzerinde duzenlemeler yapabilirsiniz..
document.body.style.backgroundColor = "aqua"

let language = "java";
let l1 = language.concat("script")

let url = "www.kodluyoruz.org"
let urlNew = url.replace("www.","")

let toplam = `
${l1}
${urlNew}`
console.log(toplam)