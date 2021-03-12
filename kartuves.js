let secretWord = document.getElementById("secretWord")
let startGameButton = document.getElementById("startGameButton")
let mistakes = document.getElementById("mistakes")
let wordUnknownYet = document.getElementById("wordUnknownYet")
let unknownYetLetter = document.getElementsByClassName("unknownYetLetter")
let letter = document.getElementsByClassName("letter")

startGameButton.addEventListener("click", startGameFun)

let setWord =""
let setWordArr=[]
let mistakeCounter = 0
let indexOfGuessed=[]

function startGameFun(){

    startGameButton.removeEventListener("click", startGameFun)

    setWord = secretWord.value.toUpperCase()
    console.log(setWord)
    setWordArr=setWord.split()
    console.log(setWordArr)
    for (let i = 0; i < setWord.length; i++) {
        wordUnknownYet.innerHTML+=`
        <div id="i" class="unknownYetLetter">_</div>
        `
    }
    for (let i = 0; i < 25; i++) {
        letter[i].addEventListener("click", checkLetterFun)
    }
}
function checkLetterFun(event){
    console.log(event.target.innerText)
    event.target.removeEventListener("click", checkLetterFun)
    let letterGuessed =""

    if(setWord.includes(event.target.innerText)){
        letterGuessed = event.target.innerText

        console.log(event.target.innerText)
        event.target.style.backgroundColor = "green"


        for (let i = 0; i < setWord.length; i++) {
            if(setWord[i]===letterGuessed){
               indexOfGuessed.push(i)
            }
        }
    } else {
        console.log("ner tokios")
        event.target.style.backgroundColor = "red"
        mistakeCounter+= 1
        mistakes.innerText = mistakeCounter
    }
    console.log(indexOfGuessed)
    for (let i = 0; i <indexOfGuessed.length ; i++) {
        unknownYetLetter[indexOfGuessed[i]].innerText = event.target.innerText
    }
    indexOfGuessed=[]
// checkIfWinOrLose()

}
