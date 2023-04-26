import { greeting } from "../src/cli.js";
import { randomNumber } from "../src/utils.js";
import readlineSync from 'readline-sync';

const name = greeting()

const randomSign = () =>{
    const signs = ['-', '+', '*', ':']
    const random = Math.floor(Math.random() * 4)
    return signs[random]
}

let count = 0
const calcGame = () => {
    console.log('What is the result of the expression?')
    while(count <= 3){
        let correctAns
        const firstNum = randomNumber()
        const secondNum = randomNumber()
        const randomSigns = randomSign()
        switch(randomSigns){
            case '+':
                correctAns = firstNum + secondNum;
                break
            case '-':
                correctAns = firstNum - secondNum
                break
            case ':':
                correctAns = firstNum / secondNum
                break
            case '*':
                correctAns = firstNum * secondNum
                break
        }
        console.log(`Question ${firstNum} ${randomSigns} ${secondNum}`)
        const answer = readlineSync.question('Answer: ')
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

console.log(calcGame())