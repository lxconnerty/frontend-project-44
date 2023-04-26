import { greeting } from "./cli.js";
import readlineSync from 'readline-sync'

const createGame = (roundOfGame, ruleMessage) => {
    const name = greeting()
    console.log(ruleMessage);

    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = roundOfGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;( correct answer was '${correctAnswer}'
Let's try again, ${name}!`);
        return;
    }
    }
  console.log(`Congratulations, ${name}!`);
};

export default createGame;