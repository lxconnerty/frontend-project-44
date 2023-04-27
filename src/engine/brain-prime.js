import createGame from '../index.js';
import { customizableRandomNumber } from '../utils.js';

const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const maxDivisor = Math.sqrt(num);
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const question = customizableRandomNumber(1000);
  const correctAns = isPrime(question) ? 'yes' : 'no';
  return [question, correctAns];
};

const playPrime = () => createGame(primeGame, ruleMessage);

export default playPrime;
