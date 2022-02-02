import { getRandomInt } from '../utils.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => {
  const num = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = `Question: ${num}`;
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return { question, answer };
};

export default () => ({ startMessage, getQuestion });
