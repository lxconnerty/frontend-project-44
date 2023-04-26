import createGame from '../index.js';
import { randomNumber } from '../utils.js';

const ruleMessage = 'What is the result of the expression?';

const getRandomSign = () => Math.floor(Math.random());

const getSigns = () => {
  const signs = ['+', '-', '*'];
  return signs[getRandomSign()];
};

const calculate = (firstNum, operator, secondNum) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;

    case '-':
      return firstNum - secondNum;

    case '*':
      return firstNum * secondNum;
  }
};

const roundOfCalc = () => {
  const firstNum = randomNumber();
  const secondNum = randomNumber();
  const randomSigns = getSigns();
  const correctAns = calculate(firstNum, randomSigns, secondNum);
  return [`${firstNum} ${randomSigns} ${secondNum}`, `${correctAns}`];
};

const playCalc = () => createGame(roundOfCalc, ruleMessage);

export default playCalc;
