'use strict';

console.log ('hello world');

let score = 0;

let visitorName = prompt ('What is your name?');

// alert ('Welcome to my site' + vistorName) - do below instead of standard string concatenation

alert (`Welcome to my site ${visitorName}! Please answer yes or no to the following questions. `);

function sibling() {
  let questionOneGuess = prompt('Do I have any siblings?').toUpperCase();
  if(questionOneGuess === 'YES' || questionOneGuess === 'Y' ) {
    alert ('Correct!');
    score++;
  // console.log('Correct!');
  } else if (questionOneGuess === 'NO' || questionOneGuess === 'N'){
    alert ('Incorrect, I have 1 younger sibling');
  }
  // console.log ('Incorrect, I have 1 younger sibling');
}
sibling();

function language() {
  let questionTwoGuess = prompt ('Do I want to learn vietnamese?').toUpperCase();
  if(questionTwoGuess === 'YES' || questionTwoGuess === 'Y'){
    alert ('Incorrect, I actually want to learn mandarin!');
    score++;
  // console.log('Incorrect, I actually want to learn mandarin');
  } else if(questionTwoGuess === 'NO' || questionTwoGuess === 'N') {
    alert('Correct!');
  }
  // console.log('Correct;');
}
language();

function employment() {
  let questionThreeGuess = prompt ('Do I like going on jogs?').toUpperCase();
  if (questionThreeGuess === 'YES' || questionThreeGuess === 'Y'){
    alert ('Correct! I do enjoy hiking.');
    score++;
  // console.log('Correct! I do enjoy hiking.');
  } else if(questionThreeGuess === 'NO' || questionThreeGuess === 'N') {
    alert ('Incorrect!');
  }
// console.log('Incorrect!');
}
employment();


function biol() {
  let questionFourGuess = prompt ('Do I like Biology?').toUpperCase();
  if (questionFourGuess === 'YES' || questionFourGuess === 'Y'){
    alert ('Correct!');
  // console.log ('Correct');
  } else if(questionFourGuess === 'NO' || questionFourGuess === 'N') {
    alert('Incorrect! I like biology');
  }
// console.log('Incorrect! I like biology');
}
biol();


function city() {
  let questionFiveGuess = prompt ('Do I like living in WA?').toUpperCase();
  if (questionFiveGuess === 'YES' || questionFiveGuess === 'Y'){
    alert ('yes, it is beautiful!');
  // console.log('yes, it is beautiful!');
  } else if (questionFiveGuess === 'NO' || questionFiveGuess === 'N') {
    alert ('incorrect!');}
  // console.log ('incorrect!');
}
city();



// *** LAB 3 ***

// Question 6
function guessinggamme() {
  let correctNumber = 18;
  let attempts = 4;
  while (attempts > 0) {
    let questionSixGuess = +prompt('Guess what number I am thinking of between 1 and 30?');
    if (questionSixGuess === correctNumber) {
      alert('that is the correct answer. Nice!');
      score++;
      break;
    } else if (questionSixGuess < correctNumber) {
      alert(`that is too low. ${attempts - 1} attempts left.`);
    } else if(questionSixGuess > correctNumber) {
      alert(`that is too high. ${attempts - 1} attempts left.`);
    }
    attempts--;
  }
  if (attempts === 0) {
    alert(`The correct answer was ${correctNumber}`);
  }
}
guessinggamme();

// Question 7
function colorChoices() {
  let colorArray = ['blue', 'red', 'white', 'orange'];
  let guesses = 6;
  let Correct = false;
  while (guesses > 0) {
    let questionSevenG = prompt ('What are a couple of colors that I like?').toLowerCase();
    for (let i = 0; i < colorArray.length; i++) {
      if (colorArray[i] === questionSevenG) {
        Correct = true;
      }
    }
    if (Correct) {
      alert ('that is correct!');
      score++;
      break;
    } else {
      alert (`that is incorrect, my friend! ${guesses - 1} guesses left.`);
    }
    guesses--;
  }
  alert (`The possible answers were: ${colorArray}`);
}
colorChoices();

alert(`Final Score: ${score}/2`);

alert(`Thanks for playing, ${visitorName}. Thanks for coming to my site!`);


// function colorchoices() {
//   let colorArray = ['blue', 'red', 'white', 'orange'];
//   for (let i = 0; i < 6; i++) {
//   let questionSevenG = prompt('What is an example of a color that I like? ') .toLowerCase();

//   for (let j = 0; j < questionSevenG.length; j++) {
//     if(questionSevenG === colorArray[j]) {
//       alert('that is correct!');
//       score++;
//       i = 6;
//       break;
//     }
//   }
// }
