

// This is a game to guess Anson's favorit pizza topping.
// We are adding a further iteration for hot or sweet sausage.
// If
var Game = function(guess, answer, answer2) {
  this.guess = guess;
  this.answer = answer;
  this.answer2 = 'hot';
  //this.guess2 = guess2; //not sure about this bc happens within actions
  //this.answer2 = answer2;
  //this.message = message;
  this.startGame = function(guess2, message) {

    while(this.guess != this.answer) {
      if (this.guess == 'sausage') {
        this.guess2 = prompt('Sausage is a close second for me. Do you prefer hot or sweet sausage?');
          console.log(guess2);

        if (this.guess2 == this.answer2) {
           this.guess = prompt('You are right! I like hot sausage better, but what is my favorite pizza?');
        } else if (this.guess2 != this.answer2) {
           this.guess = prompt('Sorry. Sweet sausage is boring; however, can you guess what my favorite pizza topping is?');
        }

       } else {
         this.guess = prompt('No, ' + this.guess + ' is not my favorite. Would you like to guess again?');
       }
    }
    if(this.guess == this.answer) {
      this.message = 'Oh yeah, pepperoni is the best!';
    }
    alert(this.message);
  }
}
var pizzaTime = document.getElementById('pizza-time');
pizzaTime.innerHTML = this.message + '<img src="images/pizza-controler.jpg">';
var game1 = new Game (prompt("Can you guess what is Anson's favorite pizza topping?"), 'pepperoni');

game1.startGame();







