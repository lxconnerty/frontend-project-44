import readlineSync from 'readline-sync';
import { greeting } from '../src/cli.js';
import { randomNumber } from '../src/utils.js';

const name = greeting();

const check = (num) => num % 2 === 0;

let count = 0;
const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count <= 3) {
    console.log(`Question: ${randomNumber()}`);
    const correctAns = check(randomNumber()) ? 'yes' : 'no';
    const answer = readlineSync.question('Answer: ');
    if (Number(answer) === correctAns) {
      console.log('Correct!');
      count++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAns}'. 
Let's try again, ${name}!`);
      return;
    }
  }
};

console.log(evenGame());
