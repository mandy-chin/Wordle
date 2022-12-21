//set example answer
const answer = "LUNAR";
const len = answer.length;
//print len to user

//wrap in event lisener
//logic to test and return string
//guard -> len of input have to equal len
//how to check for actual word?????
//return letter in correct index
//return letter not in correct index but in word

const form = document.querySelector("form");
form.addEventListener("submit", function () {
  function getWord(event) {
    const word = event.target.input.value;
    console.log(word);
  }
});

//return previous guessed word under input box
