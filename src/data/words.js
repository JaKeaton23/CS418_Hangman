/**
 * Word Bank for Hangman Game
 * 
 * This is the DATA MODEL for the app (like Seed.js from Chapter 1).
 * Contains arrays of words organized by category.
 * The app randomly selects a word when starting a new game.
 */

const WORD_BANK = {
  animals: [
    'elephant', 'giraffe', 'penguin', 'dolphin', 'cheetah',
    'octopus', 'kangaroo', 'panther', 'hamster', 'buffalo',
    'leopard', 'gorilla', 'parrot', 'walrus', 'falcon',
  ],
  technology: [
    'javascript', 'python', 'docker', 'react', 'webpack',
    'github', 'server', 'browser', 'database', 'terminal',
    'function', 'component', 'keyboard', 'internet', 'program',
  ],
  food: [
    'pizza', 'sushi', 'burger', 'waffle', 'pretzel',
    'avocado', 'mango', 'cheese', 'noodle', 'butter',
    'cookie', 'banana', 'cherry', 'pumpkin', 'salmon',
  ],
  nature: [
    'mountain', 'volcano', 'canyon', 'forest', 'glacier',
    'thunder', 'rainbow', 'tornado', 'sunrise', 'planet',
    'crystal', 'meadow', 'island', 'desert', 'garden',
  ],
};

/**
 * getRandomWord()
 * 
 * Picks a random word from a random category.
 * Returns an object with the word and its category.
 */
function getRandomWord() {
  const categories = Object.keys(WORD_BANK);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const words = WORD_BANK[randomCategory];
  const randomWord = words[Math.floor(Math.random() * words.length)];

  return {
    word: randomWord,
    category: randomCategory,
  };
}

export { WORD_BANK, getRandomWord };
