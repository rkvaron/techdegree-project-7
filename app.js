//create variables to set up game
const overlay = document.getElementById('overlay');
const phrase = document.getElementById('phrase');
const qwerty = document.getElementById('qwerty');
const keyboardButtons = qwerty.getElementsByTagName("button");
let missed = 0;

//event to hide the start screen overlay
overlay.addEventListener('click', (e) => {
  overlay.style.visibility="hidden";
  // to show: overlay.style.visibility="visible";
});

//phrases array with 5 strings, letters and spaces only, no punctuation or special characters
var phrases = ["deal or no deal", "survey says", "this is jeopardy", "i would like to buy a vowel", "the price is right"];

//generate a random number between 1 and phrases.length
function randomNumber(){
  return Math.floor(Math.random() * phrases.length) + 1;
}

//random function selector:
function getRandomPhraseAsArray(arr){
  //selects one of the phrases
  let phraseIndex = randomNumber() - 1;
  let answerPhrase = arr[phraseIndex];
//separates the letters into an array
  const answerArray= answerPhrase.split("");;
//returns the new array
  return answerArray;
}

//function to select random phrase  and add to the gameboard
function addPhraseToDisplay(arr){
  const ul = phrase.firstElementChild;
  for(let i=0; i < arr.length; i+=1){
    let li = document.createElement('li');
    li.textContent = arr[i];
      if(arr[i] === ' ') {
        li.classList.add("space");
      } else {
        li.classList.add("letter");
      }
    ul.appendChild(li);
  }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
const phraseLetters = document.querySelectorAll('.letter');

//checkLetter function: to be used in the event addEventListener
//should have 1 parameter: the clicked button by player
//function should loop over letter to check if they match the letter in the keyboardButtons
//if there is a match, function should add class = "show" to the item containing the letter, store the matching letter inside a variable and return that letter.



qwerty.addEventListener('click', (event) => {
  //assign each button its textContext
  const buttonLetter = event.target.textContent;
  const isClicked = event.target;
  if (isClicked && buttonLetter.tagName == "button") {
    event.target.classList.add("chosen");
  } else {
    console.log("no dice");
  }

    for(let i=0; i < phraseLetters.length; i+=1) {

      if( phraseLetters[i].textContent == buttonLetter ) {
        let letterFound = phraseLetters[i];
        letterFound.classList.add("show");
      } else {
        console.log('nope');
        //do I add a return null; here? I think it breaks the conditional
      }
    }
});










//backup stuff


//missed +=1;

// qwerty.addEventListener('click', (event) => {
//   //assign each button its textContext
//   let buttonLetter = event.target.textContent;
//   for(let i=0; i < phraseLetters.length; i+=1) {
//     if( phraseLetters[i].textContent == buttonLetter ) {
//       let letterInPhrase = phraseLetters[i];
//       letterInPhrase.classList.add("show");
//     } else {
//       console.log("nope");
//     }
//   }
// });
