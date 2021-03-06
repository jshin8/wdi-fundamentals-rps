////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    switch (playerMove+computerMove) {
        case 'rockrock':
            winner = 'tie';
            break;
        case 'rockpaper':
            winner = 'computer';            
            break;
        case 'rockscissors':
            winner = 'player';
            break;
        case 'paperrock':
            winner = 'player';
            break;
        case 'paperpaper':
            winner = 'tie';
            break;
        case 'paperscissors':
            winner = 'computer';
            break;
        case 'scissorsrock':
            winner = 'computer';
            break;
        case 'scissorspaper':
            winner = 'player';
            break;
        case 'scissorsscissors':
            winner = 'tie';
            break;
    }


    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');

    for (var i=0; i<=5; i+=1) {
        if (playerWins === 5 || computerWins === 5) {
            console.log("Score Total: Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
            break;
        } 
        else 
        {
            if (winner === "player") 
            {
             playerWins;
             console.log("Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
            } 
            else if (winner === "computer") 
            {
             computerWins;
             console.log("Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
            }
        getPlayerMove();    
        
    }
}
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

