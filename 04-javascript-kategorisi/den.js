let examGrade = prompt("Puani Girin")
let textInfo;
let info = document.querySelector("#info")

if (examGrade >= 0 && examGrade <= 100) {
    if (examGrade >= 90) {
        textInfo += " AA"
        console.log(textInfo)
    } else if (examGrade >= 85) {
        textInfo += " BA"
    } else if (examGrade >= 80) {
        textInfo += " BB"
    } else if (examGrade >= 75) {
        textInfo += " CB"
    } else if (examGrade >= 70) {
        textInfo += " CC"
    } else if (examGrade >= 65) {
        textInfo += " DC"
    } else if (examGrade >= 60) {
        textInfo += " DD"
    } else if (examGrade >= 50) {
        textInfo += " FD"

info.innerHTML = `
${textInfo}`