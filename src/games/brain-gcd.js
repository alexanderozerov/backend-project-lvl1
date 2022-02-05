import { getRandomInt } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER } from './constants.js';

const startMessage = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getQuestion = () => {
  const a = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const b = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = `Question: ${a} ${b}`;
  const answer = `${gcd(Math.max(a, b), Math.min(a, b))}`;
  return { question, answer };
};

export default () => ({ startMessage, getQuestion });
