import { greeting } from "../src/cli.js";
import { randomNumber } from "../src/utils.js";
import readlineSync from 'readline-sync';

console.log(`Question: ${randomNumber()}`)

const check = (num) => {
    return num % 2 === 0
}

let count = 0
const evenGame = () => {
    const name = greeting()
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    while(count <= 3){

        const answer = readlineSync.question('Answer: ')
        // answer === 'yes' & check(answer) ? 'Correct!' : (
        // console.log(`'${ans}' is wrong answer ;(. Correct answer was 'no'.
        // Let's try again, Bill!`)
        // )
        if(answer === 'yes' & check(answer)){
            console.log('Correct!')
            count++
        }else{
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
            Let's try again, ${name}!`)
            break
        }
        if(answer === 'no' & !check(answer)){
            console.log('Correct!')
            count++
        }else{
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
            Let's try again, ${name}!`)
            break
        }
    }
}

console.log(evenGame())