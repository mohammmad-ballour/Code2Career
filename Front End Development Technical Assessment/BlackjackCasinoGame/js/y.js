let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let message_el = document.getElementById("message")
let sum_el = document.getElementById("sum")


function startGame() {
    sum_el.textContent = "Total : " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Awesome! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You lost! "
        isAlive = false
    }
    message_el.textContent = message
}