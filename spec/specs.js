describe("GuessWord", function() {
  describe("initialize", function() {
    it("initializes random a word from the wordList array", function() {
      var newGuess = Object.create(GuessWord);
      newGuess.initialize();
      newGuess.word.should.not.equal(undefined);
    });
  });
  describe("create", function() {
    it("creates an instance of the test word", function() {
      var newGuess = GuessWord.create();
      newGuess.initialize();
      GuessWord.isPrototypeOf(newGuess).should.equal(true);
    });
  });
  describe("searchForLetter", function() {
    it("checks whether an inputted letter is contained within the word", function() {
      var newGuess = GuessWord.create();
      newGuess.initialize();
      console.log(newGuess.word);
      newGuess.searchForLetter('o').should.equal(true);
    });
  });
});
