import { greeting } from "../src/cli.js";
import { randomNumber } from "../src/utils.js";
import readlineSync from 'readline-sync';

const name = greeting()



const check = (num) => {
    return num % 2 === 0
}

let count = 0
const evenGame = () => {
    
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    while(count <= 3){
        
        console.log(`Question: ${randomNumber()}`)
        const correctAns = check(randomNumber()) ? 'yes' : 'no'
        const answer = readlineSync.question('Answer: ')
        // if(answer === 'yes' & check(answer)){
        //     console.log('Correct!')
        //     count++
        // }else{
        //     console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
        //     Let's try again, ${name}!`)
        //     break
        // }
        // if(answer === 'no' & !check(answer)){
        //     console.log('Correct!')
        //     count++
        // }else{
        //     console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
        //     Let's try again, ${name}!`)
        //     break
        // }
        if(answer === correctAns){
            console.log('Correct!')
            count++
        }else{
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAns}'. 
Let's try again, ${name}!`)
            return
        }
    }
}

console.log(evenGame())