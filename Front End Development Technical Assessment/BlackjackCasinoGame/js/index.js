let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards")

function startGame() {
    isAlive = true
    hasBlackjack = false
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards : " + cards.join(" - ")
    sumEl.textContent = "Sum : " + sum
    if (sum < 21) {
        message = "Do you want to withdraw a new card?"
    } else if (sum === 21) {
        message = "Awesome! You got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You lost!"
        isAlive = false
    }
    messageEl.textContent = message
}

// Simulate drawing a random card from a standard deck
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11;              // Ace is worth 11 in Blackjack.
    } else if (randomNumber > 10) {
        return 10;              // Face cards are worth 10 in Blackjack.
    } else {
        return randomNumber
    }
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}