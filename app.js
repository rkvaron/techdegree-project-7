//create variables to set up game
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay')
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
  let phraseNumber = randomNumber() - 1;
  let answerPhrase = arr[phraseNumber];
//separates the letters into an array
  const answerArray= answerPhrase.split("");;
//returns the new array
  return answerArray;
}

//function to assign phrase to the game Keyboard
function addPhraseToDisplay(arr){
  const ul = phrase.firstElementChild;
  for(let i=0; i < arr.length; i+=1){
    let li = document.createElement('li');
    li.textContent = arr[i];
    ul.appendChild(li);
      if(li !== " ") {
        li.classList.add("letter");
      } else if(li == " "){
        li.classList.add("space");
    }
  }
}


const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
