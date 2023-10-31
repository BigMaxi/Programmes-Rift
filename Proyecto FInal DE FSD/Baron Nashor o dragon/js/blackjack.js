//
// Blackjack App!
// 
// Card Variables
let suits = ['Corazones', 'Trebol', 'Rombos', 'Picas'];
let values = ['As', 'Rey', 'Reina', 'Jack',
            '10', '9', '8', '7', '6',
            '5', '4', '3', '2'];


// DOM Variables
let textArea = document.querySelector('#text-area');
let newGameButton = document.querySelector('#new-game-button');
let hitButton = document.querySelector('#hit-button');
let stayButton = document.querySelector('#stay-button');

// Game Variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function() {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [ getNextCard(), getNextCard() ];
    playerCards = [ getNextCard(), getNextCard() ];

    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();
});

hitButton.addEventListener('click', function() {
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
});

stayButton.addEventListener('click', function() {
    gameOver = true;
    checkForEndOfGame();
    showStatus();
});

// create the deck.
function createDeck() {

    let deck = [];

    for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {

        for(let valueIndex = 0; valueIndex < values.length; valueIndex++) {
            
            let card = {
                suit: suits[suitIndex],
                value: values[valueIndex]
            };

            deck.push( card );  // creates an array of 'card objects' inside of variable deck.
        }
    }

    return deck;
}

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIndex = Math.trunc(Math.random() * deck.length);
        let temporary = deck[swapIndex];
        deck[swapIndex] = deck[i];
        deck[i] = temporary;
    }
}

// prints out card value and suit.
function getCardString(card) {
    return card.value + ' De ' + card.suit;
}

function getCardNumericValue(card) {
    switch(card.value) {
        case 'As':
            return 1;
        case '2':
            return 2;
        case '3':
            return 3;
        case '4':
            return 4;
        case '5':
            return 5;
        case '6':
            return 6;
        case '7':
            return 7;
        case '8':
            return 8;
        case '9':
            return 9;  
        default:
            return 10;

    }
}

function getScore(cardArray) {
    let score = 0;
    let hasAce = false;
    for (let i = 0; i < cardArray.length; i++) {
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if (card.value === 'As') {
            hasAce = true;
        }
    }
    if (hasAce && score + 10 <= 21) {
        return score + 10;
    }
    return score;
}

function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function checkForEndOfGame() {
    
    updateScores();

    if(gameOver) {
        // let dealer take cards
        while(dealerScore < playerScore && playerScore <= 21 && dealerScore <= 21) {
            dealerCards.push(getNextCard());
            updateScores();
        }
    }

    if (playerScore > 21) {
        playerWon = false;
        gameOver = true;
    } else if (dealerScore > 21) {
        playerWon = true;
        gameOver = true;
    } else if (gameOver) {

        if (playerScore > dealerScore) {
            playerWon = true;
        } else {
            playerWon = false;
        }
    }
}

function showStatus() {
    if (!gameStarted) {
        textArea.innerHTML = 'Bienvenido a Blackjack!';
        return;
    }

    let dealerCardString = '';
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) + '\n';
    }

    let playerCardString = '';
    for (let i = 0; i < playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]) + '\n';
    }

    updateScores();

    textArea.innerText = 
        'El repartidor tiene:\n' +
        dealerCardString +
        '(score: ' + dealerScore + ')\n\n' +

        'Tu tienes:\n' +
        playerCardString +
        '(score: ' + playerScore + ')\n\n';

        if (gameOver) {
            if(playerWon) {
                textArea.innerText += "Tu ganas!";
            } else {
                textArea.innerText += "El repartidor gana";
            }
            newGameButton.style.display = 'inline';
            hitButton.style.display = 'none';
            stayButton.style.display = 'none';
        }

}

// takes top card.
function getNextCard() {
    return deck.shift();  // returns the first card OBJECT in the array.
}
