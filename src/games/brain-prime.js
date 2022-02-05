import { getRandomInt } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER } from './constants.js';

const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  let i = 2;
  while (i < Math.sqrt(n)) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getQuestion = () => {
  const n = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = `${n}`;
  const answer = isPrime(n) ? 'yes' : 'no';
  return { question, answer };
};

export default () => ({ startMessage, getQuestion });
