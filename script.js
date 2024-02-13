const marioElm = document.getElementById("mario")
const luigiElm = document.getElementById("luigi")

let mario = {
    elm: marioElm,
    top: 300,
    left: 400
}

let luigi = {
    elm: luigiElm,
    top: 200,
    left: 200
}

const characters = [mario, luigi]

// Får inn en character og oppdaterer top og left attributtene på den
function drawCharacter(c) {
    c.elm.style.top = c.top + "px"
    c.elm.style.left = c.left + "px"
}

// Change top and left 
function updateCharacter(c) {
    c.top += Math.floor(Math.random() * 41) - 20
    c.left += Math.floor(Math.random() * 41) - 20
    // console.log(c)
}

function updateCharacters() {
    for (const c of characters) {
        updateCharacter(c)
        drawCharacter(c)
    }
}

setInterval(updateCharacters, 200)
