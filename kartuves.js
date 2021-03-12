let secretWord = document.getElementById("secretWord")
let startGameButton = document.getElementById("startGameButton")
let mistakes = document.getElementById("mistakes")
let wordUnknownYet = document.getElementById("wordUnknownYet")
let unknownYetLetter = document.getElementsByClassName("unknownYetLetter")
let letter = document.getElementsByClassName("letter")
let result = document.getElementById("result")

startGameButton.addEventListener("click", startGameFun)
result.addEventListener("click", restartFun)

let setWord = ""
let setWordArr = []
let mistakeCounter = 0
let indexOfGuessed = []
let lettersNotAnswered = 0

function startGameFun() {

    startGameButton.removeEventListener("click", startGameFun)

    setWord = secretWord.value.toUpperCase()
    console.log(setWord)
    setWordArr = setWord.split()
    for (let i = 0; i < setWord.length; i++) {
        wordUnknownYet.innerHTML += `
        <div id="i" class="unknownYetLetter">_</div>
        `
    }
    for (let i = 0; i < 25; i++) {
        letter[i].addEventListener("click", checkLetterFun)
    }
}

function checkLetterFun(event) {
    event.target.removeEventListener("click", checkLetterFun)
    let letterGuessed = ""

    if (setWord.includes(event.target.innerText)) {
        letterGuessed = event.target.innerText
        event.target.style.backgroundColor = "#457919"

        for (let i = 0; i < setWord.length; i++) {
            if (setWord[i] === letterGuessed) {
                indexOfGuessed.push(i)
            }
        }
    } else {
        console.log("ner tokios")
        event.target.style.backgroundColor = "#960f0b"
        mistakeCounter += 1
        mistakes.innerText = mistakeCounter
    }
    for (let i = 0; i < indexOfGuessed.length; i++) {
        unknownYetLetter[indexOfGuessed[i]].innerText = event.target.innerText
    }
    indexOfGuessed = []
    checkIfWinOrLose()

}

function checkIfWinOrLose() {

    if (mistakeCounter > 8) {
        result.style.display = "flex"
        result.innerText = "!!! YOU LOSE !!!"
    }
    for (i = 0; i < setWord.length; i++) {
        if (unknownYetLetter[i].innerText.includes("_")) {
            lettersNotAnswered += 1
        }
    }

    if (lettersNotAnswered === 0) {
        result.style.display = "flex"
        result.innerText = "!!! YOU WIN !!!"
    }
    lettersNotAnswered = 0

}

function restartFun() {
    window.location.href = "./kartuves.html"
}
