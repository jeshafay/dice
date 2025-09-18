function rollDice() {
    // var randomNumber = getRandomInt(1, 6);
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var imageRes1 = "images/dice" + randomNumber1 + ".png"
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src", imageRes1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imageRes2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelector(".img2");
    image2.setAttribute("src", imageRes2);

    winCondition(randomNumber1, randomNumber2)
}

// rollDice()

function winCondition(player1, player2) {
    var result = document.querySelector("#result");

    if (player1 == player2){
        result.textContent = "Draw!";
    }

    else if (player1 > player2){
        result.textContent = "Player 1 Wins!";
    }

    else if (player1 < player2){
        result.textContent = "Player 2 Wins!";
    }
}