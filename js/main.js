let fontInput = document.getElementById("fontinput")


function changeInputFont() {
    let choosedfont = fontInput.value

    cssFontString = `${choosedfont}, '${choosedfont}'`
    fontInput.style.fontFamily = cssFontString    
}


function checkFont(font) {
    state = document.fonts.check("16px " + font)
    return state
}

function changeFont() {
    let choosedfont = fontInput.value
    let state = checkFont(choosedfont)
    if (state) {
        let cssFontString = `${choosedfont}, '${choosedfont}'`
        changeInputFont()
        fontInput.style.fontFamily = cssFontString
        document.body.style.fontFamily = cssFontString


        let slidetitles = document.getElementsByClassName("fonttitle")
        for (i in slidetitles) {
            let slidetitle = slidetitles[i]

            slidetitle.innerText = choosedfont

        }
        

    } else {alert(`Font ${choosedfont} not installed on this PC `)}

    
}

function changeFontManually(font) {
    let choosedfont = font
    let state = checkFont(choosedfont)
    if (state) {
        let cssFontString = `${choosedfont}, '${choosedfont}'`
        changeInputFont()
        fontInput.style.fontFamily = cssFontString
        document.body.style.fontFamily = cssFontString
        
        let slidetitles = document.getElementsByClassName("fonttitle")
        for (i in slidetitles) {
            let slidetitle = slidetitles[i]

            slidetitle.innerText = choosedfont

        }

    } else {alert(`Font ${choosedfont} not installed on this PC `)}

    
}

let bar1 = document.getElementById("weight100")
let bar1it = document.getElementById("weight100it")
let bar2 = document.getElementById("weight200")
let bar2it = document.getElementById("weight200it")
let bar3 = document.getElementById("weight300")
let bar3it = document.getElementById("weight300it")
let bar4 = document.getElementById("weight400")
let bar4it = document.getElementById("weight400it")
let bar5 = document.getElementById("weight500")
let bar5it = document.getElementById("weight500it")
let bar6 = document.getElementById("weight600")
let bar6it = document.getElementById("weight600it")
let bar7 = document.getElementById("weight700")
let bar7it = document.getElementById("weight700it")
let bar8 = document.getElementById("weight800")
let bar8it = document.getElementById("weight800it")
let bar9 = document.getElementById("weight900")
let bar9it = document.getElementById("weight900it")



let sampleTexts = document.querySelectorAll("main .bar .text span")

function sampleTextChanged(elindex) {
    
    let newvalue = sampleTexts[elindex].innerText

    sampleTexts[elindex].classList.remove("sampletext")

    let otherSamples = document.getElementsByClassName("sampletext")
    
    for (i in otherSamples) {
        let el = otherSamples[i]
        el.innerText = ""
        el.innerText = newvalue
    }

    sampleTexts[elindex].classList.add()
    
}

if (checkFont("Segoe UI")) {
    changeFontManually("Segoe UI")
    console.log('Segoe UI DETECTED');
} else if (checkFont("Tahoma")) {
    changeFontManually("Tahoma")
    console.log('Tahoma DETECTED');
} else if (checkFont("Geneva")) {
    changeFontManually("Geneva")
    console.log('Geneva DETECTED');
} else if (checkFont("Verdana")) {
    changeFontManually("Verdana")
    console.log('Verdana DETECTED');
} else if (checkFont("sans-serif")) {
    changeFontManually("sans-serif")
    console.log('sans-serif DETECTED');
}