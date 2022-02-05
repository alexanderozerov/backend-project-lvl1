import { getRandomInt, getRandomFromList } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER } from './constants.js';

const startMessage = 'What is the result of the expression?';

const SIGNS = {
  PLUS: '+',
  MINUS: '-',
  MULT: '*',
};

const evaluate = (a, b, sign) => {
  switch (sign) {
    case SIGNS.PLUS:
      return a + b;
    case SIGNS.MINUS:
      return a - b;
    case SIGNS.MULT:
      return a * b;
    default:
      return null;
  }
};

const getQuestion = () => {
  const a = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const b = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const sign = getRandomFromList(Object.values(SIGNS));
  const question = `Question: ${a} ${sign} ${b}`;
  const answer = `${evaluate(a, b, sign)}`;
  return { question, answer };
};

export default () => ({ startMessage, getQuestion });
