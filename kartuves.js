let secretWord = document.getElementById("secretWord")
let startGameButton = document.getElementById("startGameButton")
let mistakes = document.getElementById("mistakes")
let wordUnknownYet = document.getElementById("wordUnknownYet")
let unknownYetLetter = document.getElementsByClassName("unknownYetLetter")
let letter = document.getElementsByClassName("unknownYetLetter")

startGameButton.addEventListener("click", startGameFun)


let setWord =""
function startGameFun(){
    setWord = secretWord.value
    for (let i = 0; i < setWord.length; i++) {
        wordUnknownYet+=`
        <div id="${i-1}" class="unknownYetLetter">_</div>
        `
    }
}
