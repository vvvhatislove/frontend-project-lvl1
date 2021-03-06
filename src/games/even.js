import getRandomInt from '../utils.js';
import playGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makeGameData = () => {
  const number = getRandomInt(-1000, 1000);

  const question = number;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => playGame(task, makeGameData);
