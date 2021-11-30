//The goal is to have the user interact with a magic eight ball that responds when a question is asked by the user.

//Greet the user with his or her name.
let userName = 'TJ';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//User inputs their question here.
let userQuestion = 'How are you?';
userQuestion ? console.log(`Your question is: \"${userQuestion}\", ${userName}`) : console.log('Please ask your question.');

//The Magic 8 ball number generator.
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

//answers to each number generated from 0-7.
switch (randomNumber) {
  case 0: 
  eightBall = 'It is certain.';
  break;
  case 1:
  eightBall = 'Don\'t stop believin\'';
  break;
  case 2:
  eightBall = 'I have to go.';
  break;
  case 3:
  eightBall = 'Reply hazy try again.';
  break;
  case 4:
  eightBall = 'That is what the dahli-Llama asked as well.';
  break;
  case 5:
  eightBall = 'Can you rephrase that?';
  break;
  case 6:
  eightBall = 'I know you are but what am I?';
  break;
  case 7:
  eightBall = 'Signs point to yes.';
  break;
  default:
  eightBall = 'ERROR';
  break;
}
//Print out the eightBall value
console.log(eightBall)
