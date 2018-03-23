//create variables to set up game
const overlay = document.getElementById('overlay');
const phrase = document.getElementById('phrase');
const qwerty = document.getElementById('qwerty');
let missed = 0;



//phrases array with 5 strings, letters and spaces only, no punctuation or special characters
const phrases = ["deal or no deal", "survey says", "this is jeopardy", "i would like to buy a vowel", "the price is right"];

//generate a random number between 1 and phrases.length
function randomNumber(){
  return Math.floor(Math.random() * phrases.length);
}

//function to select a random phrase from the array and split it into an array of characters
function getRandomPhraseAsArray(arr){
  //selects one of the phrases
  let phraseIndex = randomNumber();
  let answerPhrase = arr[phraseIndex];
//separates the letters into an array
  const answerArray= answerPhrase.split("");;
//returns the new array
  return answerArray;
}

//function to select random phrase and add to the gameboard, then add classes of "letter" or "space"
function addPhraseToDisplay(arr) {
  const ul = phrase.firstElementChild;
  for(let i = 0; i < arr.length; i+=1) {
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

//function to check button clicked to phrase. returns either the letter or null
function checkLetter(button) {
  //as a default, it returns null
  let letterFound = null;

  //function should loop over letter to check if they match the letter in the phraseLetters
  for(let i = 0; i < phraseLetters.length; i ++) {
    if( phraseLetters[i].textContent == button.textContent ) {
      //if there is a match, function should add class = "show" to the item containing the letter, store the matching letter inside letterFound
      phraseLetters[i].classList.add("show");
      letterFound = phraseLetters[i].textContent;
    } else {
      button.setAttribute('disabled', true);
    }
  }
  return letterFound;
}

//checks if the game is won, lost or keep playing
function checkWin(){
  const numberCorrect = document.querySelectorAll('.show');
  if(phraseLetters.length === numberCorrect.length) {
    overlay.classList.replace('start', 'win');
    const h2 = document.createElement('h2');
    h2.textContent = "You win!";
    overlay.appendChild(h2);
    const restartButton = overlay.querySelector('a');
    restartButton.innerHTML="Play Again?";
    overlay.insertBefore(h2, restartButton);
    overlay.style.visibility="visible";

  } else if (missed === 5 ) {
    overlay.classList.replace('start', 'lose');
    const h2 = document.createElement('h2');
    h2.textContent = "You Lose!";
    overlay.appendChild(h2);
    const restartButton = overlay.querySelector('a');
    restartButton.innerHTML="Play Again?";
    overlay.style.visibility="visible";
  } else {
    console.log("Keep guessing");
  }
}

//to restart the game
function restartGame() {
  location.reload();
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

const phraseLetters = document.querySelectorAll('.letter');



qwerty.addEventListener('click', (e) => {
  if (e.target.tagName == "BUTTON") {
    const button = e.target;
    button.classList.add("chosen");
    let letterFound = checkLetter(button);
    if (letterFound !== null) {
      button.disabled = true;
    } else {
      //hearts turn grey with a miss and adjusts score
      const tries = document.querySelectorAll('.tries');
      const heart = tries[missed].firstElementChild;
      heart.setAttribute("src", "images/lostHeart.png");
      missed += 1;
    }
  checkWin();
  }
});

//event to hide the start screen overlay
// overlay.addEventListener('click', (e) => {
//       overlay.style.visibility="hidden";
//   // to show: overlay.style.visibility="visible";
// });

overlay.addEventListener('click', (e) => {
  if (e.target.className === 'btn__reset') {
      const button = e.target;
      if(button.textContent === "Start Game"){
        overlay.style.visibility="hidden";
      } else if(button.textContent === "Play Again?"){
        restartGame();
      } else {
        console.log("error");
      }
    }
});
