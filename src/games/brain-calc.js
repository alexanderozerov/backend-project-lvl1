import { getRandomInt, getRandomFromList } from '../utils.js';

const startMessage = 'What is the result of the expression?';

const SIGNS = {
  PLUS: '+',
  MINUS: '-',
  MULT: '*',
};

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

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
  const question = `${a} ${sign} ${b}`;
  const answer = `${evaluate(a, b, sign)}`;
  return { question, answer };
};

export default () => ({ startMessage, getQuestion });