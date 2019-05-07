

console.clear()





const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    }
  };
  
  
  game.prevGuesses = [5]
  game.getGuess = function() {
    let guess = '';
    while (guess !== 'quit') {
    //   guess = prompt(`Enter a guess between' ${this.smallestNum} 'and' ${biggestNum} `)
    guess = console.log(`Enter a guess between' ${smallestNum} 'and' ${biggestNum} `)
    }
  };
  
  console.log(game, 'this is my game object')
  console.log(game.prevGuesses)
  


  