//set example answer
const answer = "LUNAR";
const length = answer.length;
let alphabet = "abcdefghijklmnopqrstuvwxyz";
alphabet += alphabet.toUpperCase();

//print len to user

//wrap in event lisener
//logic to test and return string
//guard -> len of input have to equal len
//how to check for actual word?????
//return letter in correct index
//return letter not in correct index but in word

const button = document.querySelector("button");
button.addEventListener("click", function () {
  const userInput = document.querySelector("#textbox");
  const word = userInput.value;

  if (word.length !== length) {
    return "Your guess sucks!";
  }

  for (let i = 0; i < word.length; i++) {
    let message = "";
    if (!alphabet.includes(word[i])) {
      return "Your guess sucks!!";
    } else if (answer.includes(word[i])) {
      if (answer[i] === word[i]) {
        message += `${word[i]} is in the right place`;
      } else {
        message += `${word[i]} is in the wrong place`;
      }
    }
    console.log(message)
    return message;
  }
});

//return previous guessed word under input box
