// ********** css class eklemek veya cikartmak **********
/*
let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") // birden fazla class eklemek


greeting.classList.remove("title", "second-class", "third-class") // birden fazla class silmek

console.log(greeting.classList)

*/

let mySelf = document.querySelector("#demo")

mySelf.classList.add("1.deneme")
mySelf.classList.add("2.deneme")
mySelf.classList.add("3.deneme","4.deneme","5.denme")


mySelf.classList.remove("1.deneme","2.deneme")
mySelf.classList.remove("4.deneme")

mySelf.classList.replace("5.denme","5.deneme")





console.log(mySelf.classList)


console.log(!!2);