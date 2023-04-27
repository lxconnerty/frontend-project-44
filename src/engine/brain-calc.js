import createGame from '../index.js';
import { randomNumber, customizableRandomNumber } from '../utils.js';

const ruleMessage = 'What is the result of the expression?';

// const getRandomSign = () => Math.floor(Math.random() * 3);

const getSigns = () => {
  const signs = ['+', '-', '*'];
  return signs[customizableRandomNumber(3)];
};

function calculate(firstNum, operator, secondNum) {
  switch (operator) {
    case '+':
      return firstNum + secondNum;

    case '-':
      return firstNum - secondNum;

    case '*':
      return firstNum * secondNum;
    default:
      console.log('failed');
  }
  return operator;
}

const calcGame = () => {
  const firstNum = randomNumber();
  const secondNum = randomNumber();
  const randomSigns = getSigns();
  const correctAns = calculate(firstNum, randomSigns, secondNum);
  return [`${firstNum} ${randomSigns} ${secondNum}`, `${correctAns}`];
};

const playCalc = () => createGame(calcGame, ruleMessage);

export default playCalc;
