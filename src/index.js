import { say, ask } from './cli.js';
import gameEven from './games/brain-even.js';

export const EVEN = 'even';

const GAMES = {
  [EVEN]: gameEven,
};

const WELCOME_MESSAGE = 'Welcome to the Brain Games!';
const USERNAME_QUESTION = 'May I have your name?';
const USER_ANSWER = 'Your answer:';
const SUCCESS_MESSAGE = 'Correct!';

export default (gameName) => {
  say(WELCOME_MESSAGE);
  const userName = ask(USERNAME_QUESTION);
  say(`Hello, ${userName}!`);
  const game = GAMES[gameName];
  if (!game) {
    return;
  }
  const { startMessage, getQuestion } = game();
  say(startMessage);
  let counter = 0;
  while (counter < 3) {
    const { question, answer } = getQuestion();
    say(question);
    const userAnswer = ask(USER_ANSWER);
    if (userAnswer !== answer) {
      say(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      say(`Let's try again, ${userName}!`);
      return;
    }
    counter += 1;
    say(SUCCESS_MESSAGE);
  }
  say(`Congratulations, ${userName}!`);
};
