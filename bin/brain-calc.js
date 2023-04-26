import readlineSync from 'readline-sync';
import { greeting } from '../src/cli.js';
import { randomNumber } from '../src/utils.js';

const name = greeting();

const randomSign = () => {
  const signs = ['-', '+', '*', ':'];
  const random = Math.floor(Math.random() * 4);
  return signs[random];
};

let count = 0;
const calcGame = () => {
  console.log('What is the result of the expression?');
  while (count < 4) {
    let correctAns;
    const firstNum = randomNumber();
    const secondNum = randomNumber();
    const randomSigns = randomSign();
    switch (randomSigns) {
      case '+':
        correctAns = firstNum + secondNum;
        break;
      case '-':
        correctAns = firstNum - secondNum;
        break;
      case ':':
        correctAns = Math.floor(firstNum / secondNum);
        break;
      case '*':
        correctAns = firstNum * secondNum;
        break;
    }
    console.log(`Question ${firstNum} ${randomSigns} ${secondNum}`);
    const answer = readlineSync.question('Answer: ');
    if (Number(answer) === correctAns) {
      console.log('Correct!');
      count++;
      console.log(count)
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAns}'. 
Let's try again, ${name}!`);
      return;
    }
    if(count === 3){
        console.log(`Congratulations, ${name}!`)
    }
  }
};

console.log(calcGame());
