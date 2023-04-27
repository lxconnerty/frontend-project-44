import createGame from '../index.js';
import { randomNumber } from '../utils.js';

const ruleMessage = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let gcd = 1;
  const min = (num1 > num2) ? num2 : num1;
  for (let i = 1; i <= min; i += 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      gcd = i;
    }
  }
  return gcd;
};

const gcdGame = () => {
  const firstNum = randomNumber() + 1;
  const secondNum = randomNumber() + 1;
  const correctAns = getGCD(firstNum, secondNum);
  return [`${firstNum} ${secondNum}`, `${correctAns}`];
};

const playGCD = () => createGame(gcdGame, ruleMessage);

export default playGCD;
