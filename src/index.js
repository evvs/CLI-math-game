import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (task, instruction) => { // движок игры
  console.log(`Welcome to the Brain Games!\n${instruction}`);

  const username = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${username}!`);

  const runGame = (correctAnswers = 0) => {
    if (correctAnswers === 3) {
      return console.log(`Congratulations, ${username}`);
    }
    const saveCurrentTask = task();
    const question = car(saveCurrentTask);
    const answer = cdr(saveCurrentTask);

    console.log(`Question: ${question}`); // вопрос пользователю
    const userInput = readlineSync.question('Your answer: ').toLowerCase(); // ответ пользователя

    if (userInput !== answer) { // если ответ пользователя неверный
      console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${answer}"`);
      return console.log(`Let's try again, ${username}!`);
    }
    console.log('Correct!'); // если ответ пользователя верный
    return runGame(correctAnswers + 1);
  };
  return runGame();
};