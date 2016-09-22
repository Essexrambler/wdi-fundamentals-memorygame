    var cardOne = document.getElementById('cardOne').onclick = function() {

      document.getElementById('cardOne').innerHTML = '<img src="https://pixabay.com/static/uploads/photo/2015/08/11/11/57/spades-884197_1280.png">'

    }

    var cardTwo = document.getElementById('cardTwo').onclick = function() {

      document.getElementById('cardTwo').innerHTML = '<img src="https://pixabay.com/static/uploads/photo/2015/08/11/11/57/spades-884197_1280.png">'

    }
    
    var cardThree = document.getElementById('cardThree').onclick = function() {

      document.getElementById('cardThree').innerHTML = '<img src="https://pixabay.com/static/uploads/photo/2015/08/11/11/57/spades-884203__340.png">'

    }
    
    var cardFour = document.getElementById('cardFour').onclick = function() {

      document.getElementById('cardFour').innerHTML = '<img src="https://pixabay.com/static/uploads/photo/2015/08/11/11/57/spades-884203__340.png">'

    }

    //BUILD ARRAY WITH VALUES.
    var cards = ["king" , "king" , "queen" , "queen"];

    //BUILD EMPTY ARRAY TO PUT CARD INTO.
    var cardsInPlay =[];

    //FIND AND SELECT THE GAME BOARD.
    var gameBoard = document.getElementById("game-board");

    function isTwoCards () {
    
       //push the card that is clicked onto cip and give it an attribute.
        cardsInPlay.push(this.getAttribute('data-card'));

        //RUN THIS STATMENT TO SEE IF THE CARDS ARE IN PLAY
         IF (cardsInPlay.length === 2)   {  

        //CALL THE ISMATCH FUNCTION TO PLAY THE GAME / PASS IN CIP SO THE GAME INCLUDES THE CLICKED CARD.
        isMatch(cardsInPlay);

        //clear the cip array for new game.
         cardsInPlay = [];

    }

    if(this.getAttribute('data-card') === 'king' || this.getAttribute('data-card') === 'king') {
      this.innerHTML = '<img src="https://pixabay.com/static/uploads/photo/2015/08/11/11/57/clubs-884194_1280.png">'
    } else if (this.getAttribute('data-card') === 'queen' || this.getAttribute('data-card') === 'queen') {
      this.innerHTML = '<img src="https://pixabay.com/static/uploads/photo/2015/08/11/11/57/clubs-884198_1280.png">'
    }
  }};

   // function that will create your board
   var createBoard = function() {

  for (var i=0; i<cards.length; i++) {

    // create a div element which will be used as a card
    var cardElement = document.createElement('div');

    // add a class to the card element which will help link styling
    cardElement.className = "card";

    // append the divs to the board
    gameBoard.appendChild(cardElement);

    cardElement.setAttribute('data-card', cards[i]);

    cardElement.addEventListner('click', isTwoCards);
  }

};

  var isMatch = function() {

    if (cards[0] === cards[1]) {
      
      alert("You found a match");

    } else if (cards[2] === cards[3]) {

      alert("You found a match");

    } else if (card[0] === card[3]) {

     alert("No match");

     } 
     
     else   { 




