var GuessWord ={
  initialize: function (){
    var wordList = ['pool', 'dog', 'strong', 'worm','frog'];
    var randomWord = wordList[Math.floor((Math.random() * 5) + 0)];
    this.word = randomWord;
  },
  create: function(){
    var newGuessWord = Object.create(GuessWord);
    newGuessWord.initialize();
    return newGuessWord;
  },
  searchForLetter: function(userLetter){
    //checks user letter for selected wordList word
    var testWord = this.word;
    if (testWord.indexOf(userLetter)!== -1){
      return true;
    }else {
      return false;
    }
  }
};
