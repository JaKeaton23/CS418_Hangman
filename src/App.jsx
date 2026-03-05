import React from 'react';
import HangmanDrawing from './components/HangmanDrawing.jsx';
import WordDisplay from './components/WordDisplay.jsx';
import Keyboard from './components/Keyboard.jsx';
import GameOverModal from './components/GameOverModal.jsx';
import NewGameButton from './components/NewGameButton.jsx';
import { getRandomWord } from './data/words.js';

const MAX_WRONG = 5; // 5 wrong guesses = game over

class HangmanApp extends React.Component {
  constructor(props) {
    super(props);

    // get a random word to start
    const { word, category } = getRandomWord();

    // Step 5: set initial state
    this.state = {
      word: word,
      category: category,
      guessedLetters: [],
      showModal: false,
    };

    // bind our methods so 'this' works correctly
    this.handleLetterClick = this.handleLetterClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  // listen for keyboard presses so you can type letters too
  componentDidMount() {
    this.keyHandler = (event) => {
      const letter = event.key.toUpperCase();
      if (/^[A-Z]$/.test(letter)) {
        this.handleLetterClick(letter);
      }
    };
    document.addEventListener('keydown', this.keyHandler);
  }

  // clean up the listener when component is removed
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyHandler);
  }

  // called when user clicks a letter on the keyboard
  handleLetterClick(letter) {
    // dont do anything if letter already guessed
    if (this.state.guessedLetters.includes(letter)) return;

    // check if game is already over
    const wrongLetters = this.state.guessedLetters.filter(
      (l) => !this.state.word.toUpperCase().includes(l)
    );
    const hasLost = wrongLetters.length >= MAX_WRONG;
    const wordLetters = this.state.word.toUpperCase().split('');
    const hasWon = wordLetters.every((l) => this.state.guessedLetters.includes(l));

    if (hasWon || hasLost) return;

    // add the new letter to guessed letters (immutable update with spread)
    const newGuessedLetters = [...this.state.guessedLetters, letter];

    // check if game is over after this guess
    const newWrongLetters = newGuessedLetters.filter(
      (l) => !this.state.word.toUpperCase().includes(l)
    );
    const newHasLost = newWrongLetters.length >= MAX_WRONG;
    const newHasWon = wordLetters.every((l) => newGuessedLetters.includes(l));

    // update state 
    this.setState({
      guessedLetters: newGuessedLetters,
      showModal: newHasWon || newHasLost,
    });
  }

  // called when user clicks New Game button
  handleNewGame() {
    const { word, category } = getRandomWord();

    this.setState({
      word: word,
      category: category,
      guessedLetters: [],
      showModal: false,
    });
  }

  render() {
    const { word, category, guessedLetters, showModal } = this.state;

    // these are calculated from state 
    const wordUpper = word.toUpperCase();
    const correctLetters = guessedLetters.filter((l) => wordUpper.includes(l));
    const wrongLetters = guessedLetters.filter((l) => !wordUpper.includes(l));
    const hasWon = wordUpper.split('').every((l) => guessedLetters.includes(l));
    const hasLost = wrongLetters.length >= MAX_WRONG;
    const isGameOver = hasWon || hasLost;

    return (
      <div className="hangman-app">
        {/* header with title and new game button */}
        <header className="app-header">
          <h1 className="app-title">Hangman</h1>
          <NewGameButton onNewGame={this.handleNewGame} />
        </header>

        {/* main game area */}
        <main className="game-area">
          {/* left side - drawing and lives */}
          <div className="game-left">
            <HangmanDrawing wrongGuesses={wrongLetters.length} />
            <div className="lives-counter">
              <span className="lives-label">Lives left</span>
              <span className="lives-hearts">
                {Array.from({ length: MAX_WRONG }, (_, i) => (
                  <span key={'life-' + i} className={'heart ' + (i < (MAX_WRONG - wrongLetters.length) ? 'alive' : 'dead')}>
                    {i < (MAX_WRONG - wrongLetters.length) ? '♥' : '♡'}
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* right side - word, category hint, keyboard */}
          <div className="game-right">
            <div className="category-hint">
              <span className="category-label">Category:</span>
              <span className="category-value">{category}</span>
            </div>

            <WordDisplay
              word={word}
              guessedLetters={guessedLetters}
              isGameOver={isGameOver}
            />

            <Keyboard
              guessedLetters={guessedLetters}
              correctLetters={correctLetters}
              onLetterClick={this.handleLetterClick}
              disabled={isGameOver}
            />
          </div>
        </main>

        {/* win/lose popup */}
        <GameOverModal
          isVisible={showModal}
          isWinner={hasWon}
          word={word}
          onNewGame={this.handleNewGame}
        />
      </div>
    );
  }
}

export default HangmanApp;