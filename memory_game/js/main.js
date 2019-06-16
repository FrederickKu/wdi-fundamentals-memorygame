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
			console.log("You found a match!");
		} else {
			console.log("Sorry, try again.");
		}
	}
}

function flipCard (cardId) {
	console.log ("User flipped " + cards[cardId].rank + ' ' + cards[cardId].suits);
	console.log (cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}


flipCard(0);
flipCard(2);
