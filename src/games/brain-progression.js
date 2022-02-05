import { getRandomInt } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER } from './constants.js';

const startMessage = 'What number is missing in the progression?';

const getQuestion = () => {
  const n = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const d = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const progression = Array(10).fill(n, 0, 10).map((v, i) => v + (i + 1) * d);
  const i = getRandomInt(0, 9);
  const x = progression[i];
  progression[i] = '..';
  const question = `Question: ${progression.join(' ')}`;
  const answer = `${x}`;
  return { question, answer };
};

export default () => ({ startMessage, getQuestion });
