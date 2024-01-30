const getComputer = document.getElementById("computer-choice")
const getUser = document.getElementById("user-choice")
const getBattleResult = document.getElementById("result")
const getChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

getChoices.forEach(choices => choices.addEventListener("click", (e) => {
    userChoice = e.target.id
    getUser.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * getChoices.length) + 1

    if (randomNumber === 1) {
        computerChoice = "🗿"
    }
    if (randomNumber === 2) {
        computerChoice = "✂️"
    }
    if (randomNumber === 3) {
        computerChoice = "📄"
    }
    getComputer.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Ex æquo! ⚔️"
    }
    if (computerChoice === "🗿" && userChoice === "📄") {
        result = "You conquered! 🗡️"
    }
    if (computerChoice === "🗿" && userChoice === "✂️") {
        result = "You perished! 💀"
    }
    if (computerChoice === "📄" && userChoice === "🗿") {
        result = "You perished! 💀"
    }
    if (computerChoice === "📄" && userChoice === "✂️") {
        result = "You conquered! 🗡️"
    }
    if (computerChoice === "✂️" && userChoice === "📄") {
        result = "You perished! 💀"
    }
    if (computerChoice === "✂️" && userChoice === "🗿") {
        result = "You conquered! 🗡️"
    }
    getBattleResult.innerHTML = result
}