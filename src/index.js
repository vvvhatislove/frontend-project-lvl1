import promptly from 'promptly';

async function playGame(task, makeGameData) {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May i have your name?');
  console.log(`Hello, ${name}!\n${task}`);

  let correctAnswersCounter = 0;
  const correctAnswersAmount = 3;

  while (correctAnswersCounter < correctAnswersAmount) {
    const [question, correctAnswer] = makeGameData();
    const answer = await promptly.prompt(`Question: ${question}`);

    console.log(`Your answer: ${answer}`);
    if (answer === correctAnswer) {
      correctAnswersCounter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is a wrong answer ;(. The correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default playGame;
