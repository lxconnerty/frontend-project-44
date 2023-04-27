import readlineSync from 'readline-sync';
import greeting from './cli.js';

const createGame = (roundOfGame, ruleMessage) => {
  const name = greeting();
  console.log(ruleMessage);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAns] = roundOfGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAns) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;( correct answer was '${correctAns}'
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default createGame;
