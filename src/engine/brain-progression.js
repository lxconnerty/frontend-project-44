import createGame from '../index.js';
import {customizableRandomNumber} from '../utils.js';

const ruleMessage = 'What number is missing in the progression?';

const getProgressionMember = (start, incr, position) => start + incr * position;

const getProgressionQuestion = (start, incr, total, blank) => {
  const progression = [];
  for (let i = 0; i < total; i += 1) {
    if (i === blank) {
      progression.push('..');
    } else {
      progression.push(getProgressionMember(start, incr, i));
    }
  }
  return progression.join(' ');
};

const roundOfProgression = () => {
  const start = customizableRandomNumber(100);
  const incr = customizableRandomNumber(18) + 2;
  const total = 10;
  const blank = customizableRandomNumber(total - 1);
  const question = getProgressionQuestion(start, incr, total, blank);
  const correctAnswer = getProgressionMember(start, incr, blank);
  return [question, `${correctAnswer}`];
};

const playProgression = () => createGame(roundOfProgression, ruleMessage);

export default playProgression;