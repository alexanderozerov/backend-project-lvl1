import readlineSync from 'readline-sync';
import even from './brain-even.js';

const GAMES = { even };


export default (gameName) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (!GAMES[gameName]) {
    return;
  }
  const result = GAMES[gameName]();
  const endMessage = result ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;
  console.log(endMessage);
};
