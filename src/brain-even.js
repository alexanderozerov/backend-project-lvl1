import readlineSync from 'readline-sync';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const START_MESSAGE = 'Answer "yes" if the number is even, otherwise answer "no".';
const WIN_MESSAGE = 'Correct!';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
  return num % 2 === 0;
}

export default () => {
  console.log(START_MESSAGE);
  let wins = 0;
  while (wins < 3) {
    const num = getRandomInt(MIN_NUMBER, MAX_NUMBER);
    const expectedAnswer = isEven(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== expectedAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      return false;
    }
    console.log(WIN_MESSAGE);
    wins += 1;
  }
  return true;
};
