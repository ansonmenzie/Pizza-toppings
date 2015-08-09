
var guess, answer, guess2, answer2, message;


var Game = function(guess, answer) {
  this.guess = guess;
  this.answer = answer;
  this.answer2 = 'hot';

  this.startGame = function() {

while (this.guess != this.answer) {
      if (this.guess == 'sausage') {
        this.guess2 = prompt('Sausage is a close second for me. Do you prefer hot or sweet sausage?');
          console.log(this.guess + ' is almost correct'
            );
          addToGuessList();


        if (this.guess2 == this.answer2) {
           this.guess = prompt('You are right! I like hot sausage better, but what is my favorite pizza?');
           addToGuessList();


        } else if (this.guess2 != this.answer2) {
           this.guess = prompt('Nope, I don\'t care for that type of sausage; however, can you guess what my favorite pizza topping is?');
           addToGuessList();

        }

       } else {
         this.guess = prompt('No, ' + this.guess + ' is not my favorite. Would you like to guess again?');
         console.log(this.guess + ' is not correct');
         addToGuessList();

       }
    }
    if(this.guess == this.answer) {
      this.message = alert('Oh yeah, pepperoni is the best!');
      console.log('You got it right');


    }


  function addToGuessList() {
  var guessListItem = document.createElement('li');
  var guessNode = document.createTextNode('Wrong, try again.');
  guessListItem.appendChild(guessNode);
  document.getElementById('guess-list').appendChild(guessListItem);
}
}
}
var pizzaTime = document.getElementById('pizza-time');
pizzaTime.innerHTML = '<img src="images/pizza-controler.jpg">';
var game1 = new Game (prompt("Can you guess what is Anson's favorite pizza topping?"), 'pepperoni');

game1.startGame();


// function addToGuessList() {
//   var guessListItem = document.createElement('li');
//   var guessNode = document.createTextNode(guess);
//   guessListItem.appendChild(guessNode);
//   document.getElementById('guess-list').appendChild(guessListItem);
// }





