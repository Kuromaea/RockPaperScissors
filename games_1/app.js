const computer = document.getElementById("computer-choice")
const user = document.getElementById("user-choice")
const battleResult = document.getElementById("result")
const choices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

choices.forEach(choices => choices.addEventListener("click", (e) => {
    userChoice = e.target.id
    user.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length) + 1

    if (randomNumber === 1) {
        computerChoice = "🌑"
    }
    if (randomNumber === 2) {
        computerChoice = "✂"
    }
    if (randomNumber === 3) {
        computerChoice = "📄"
    }
    computer.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "it's a draw!"
    }
    if (computerChoice === "🌑" && userChoice === "📄") {
        result = "You win!"
    }
    if (computerChoice === "🌑" && userChoice === "✂") {
        result = "You lost!"
    }
    if (computerChoice === "📄" && userChoice === "🌑") {
        result = "You lost!"
    }
    if (computerChoice === "📄" && userChoice === "✂") {
        result = "You win!"
    }
    if (computerChoice === "✂" && userChoice === "📄") {
        result = "You lost!"
    }
    if (computerChoice === "✂" && userChoice === "🌑") {
        result = "You win!"
    }
    battleResult.innerHTML = result
}