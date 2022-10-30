'use strict';

console.log ('hello world');

let visitorName = prompt ('What is your name?');

// alert ('Welcome to my site' + vistorName) - do below instead of standard string concatenation

alert (`Welcome to my site ${visitorName}! Please answer yes or no to the following questions. `);

let questionOneGuess = prompt('Do I have any siblings?').toUpperCase();



if(questionOneGuess === 'YES' || questionOneGuess === 'Y' )
{ alert ('Correct!');}
// console.log('Correct!');
else if (questionOneGuess === 'NO' || questionOneGuess === 'N')
{alert ('Incorrect, I have 1 younger sibling');}
// console.log ('Incorrect, I have 1 younger sibling');



let questionTwoGuess = prompt ('Do I want to learn vietnamese?').toUpperCase();
if(questionTwoGuess === 'YES' || questionTwoGuess === 'Y')
{alert ('Incorrect, I actually want to learn mandarin!');}
// console.log('Incorrect, I actually want to learn mandarin');
else if(questionTwoGuess === 'NO' || questionTwoGuess === 'N')
{alert('Correct!');}
// console.log('Correct;');



let questionThreeGuess = prompt ('Do I like going on jogs?').toUpperCase();
if (questionThreeGuess === 'YES' || questionThreeGuess === 'Y')
{alert ('Correct! I do enjoy hiking.');}
// console.log('Correct! I do enjoy hiking.');
else if(questionThreeGuess === 'NO' || questionThreeGuess === 'N')
{alert ('Incorrect!');}
// console.log('Incorrect!');



let questionFourGuess = prompt ('Do I like Biology?').toUpperCase();
if (questionFourGuess === 'YES' || questionFourGuess === 'Y')
{alert ('Correct!');}
// console.log ('Correct');
else if(questionFourGuess === 'NO' || questionFourGuess === 'N')
{alert('Incorrect! I like biology');}
// console.log('Incorrect! I like biology');


let questionFiveGuess = prompt ('Do I like living in WA?').toUpperCase();
if (questionFiveGuess === 'YES' || questionFiveGuess === 'Y')
{alert ('yes, it is beautiful!');}
// console.log('yes, it is beautiful!');
else if (questionFiveGuess === 'NO' || questionFiveGuess === 'N')
{alert ('incorrect!');}
// console.log ('incorrect!');


alert(`Thanks for playing, ${visitorName}. Thanks for coming to my site!`);
