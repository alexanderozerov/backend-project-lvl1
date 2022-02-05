import { getRandomInt } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER } from './constants.js';

const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => {
  const num = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = `Question: ${num}`;
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return { question, answer };
};

export default () => ({ startMessage, getQuestion });
