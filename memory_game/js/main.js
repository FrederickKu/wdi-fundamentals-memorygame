console.log("Up and running");

var cards = [
	{
		rank: 'queen',
		suits: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	}, 
	{
		rank: 'queen',
		suits: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	}, 
	{		
		rank: 'king',
		suits: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	}, 
	{
		rank: 'king',
		suits: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}];

var cardsInPlay = [];

function checkForMatch () { 
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}

function flipCard () {
	var cardId = this.getAttribute('data-id');
	console.log ("User flipped " + cards[cardId].rank + ' ' + cards[cardId].suits);
	this.setAttribute ('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}


function createBoard () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener ('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();
