#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  askName, randomNumber1To99, even, stopGame,
} from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
const userName = askName(); // узнаем имя и сохраняем в константу


// реализация игры через рекурсию
const gameEven = (number = randomNumber1To99(), acc = 0) => {
  // number рандомное число от 1 до 99, acc - аккамулятор

  if (acc === stopGame()) { // когда acc будет равен stopGame(по дефолту значение 3, можно поменять)
    return console.log(`Congratulations, ${userName}`); // выйти из рекурсии и закончить игру
  }

  console.log(`Question: ${number}`); // вопрос пользователю
  const userInput = readlineSync.question('Your answer: ').toLowerCase(); // ответ пользователя

  if (userInput !== even(number)) { // если ответ пользователя неверный
    return console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${even(number)}"
Let's try again, ${userName}!`);
  }
  // если ответ верен, запускается рекурсия
  console.log('Correct!');
  return gameEven(randomNumber1To99(), acc + 1);
};

gameEven();
