'use strict';

console.log ('hello world');

let visitorName = prompt ('What is your name?');

// alert ('Welcome to my site' + vistorName) - do below instead of standard string concatenation


alert (`Welcome to my site ${visitorName}! Please answer yes or no to the folowing questions. `);

let questionOneGuess = prompt('Do I have any pets?').toUpperCase();


if(questionOneGuess === 'YES' || questionOneGuess === 'Y' )
{ alert ('Correct!');
} else if (questionOneGuess === 'NO' || questionOneGuess === 'N')
{alert ('Incorrect, I have two cats');
}

alert(`Thanks for playing, ${visitorName}. Thanks for coming to my site!`);
