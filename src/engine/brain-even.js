#!/usr/bin/env node
import createGame from '../index.js';
import { randomNumber } from '../utils.js';

const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const check = (num) => (num % 2 === 0);

const evenGame = () => {
  const question = randomNumber();
  const correctAns = check(question) ? 'yes' : 'no';
  return [question, correctAns];
};

const playEven = () => createGame(evenGame, ruleMessage);

export default playEven;
