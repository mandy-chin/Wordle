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

const button = document.querySelector("button");
button.addEventListener("submit",function(){
    const input_field = document.querySelector(".textbox");
    const word = input_field.textContent;
    console.log(word);
})



//return previous guessed word under input box