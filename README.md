# Hangman Game

A hangman word-guessing game built with React class components. Made for my fullstack development class following the React principles from Chapter 2

## How to Run

### With Vite (development)

```bash
npm install
npm run dev
```

Open http://localhost:5173

### With Docker

```bash
docker build -t hangman-game .
docker run -d -p 8080:80 hangman-game
```

Open http://localhost:8080

## Features

- Hangman images that update with each wrong guess (6 images, 5 lives)
- On-screen QWERTY keyboard to pick letters (also works with physical keyboard)
- Wrong guesses shown on keyboard (red + strikethrough)
- Remaining lives shown as hearts
- New Game button to restart anytime
- Win/Lose popup when game ends
- Word categories with hints (animals, technology, food, nature)

## How to Play

1. A random word is picked from one of four categories
2. The category is shown as a hint
3. Click letters on the keyboard (or type on your keyboard) to guess
4. Correct guesses show the letter in the word (green key)
5. Wrong guesses add a body part to the hangman (red key with strikethrough)
6. You get 5 wrong guesses before the game is over
7. A popup shows if you won or lost with a button to play again

## Component Structure

Built following the 7-step methodology

```
HangmanApp (stateful - owns all game data)
├── NewGameButton
├── HangmanDrawing (shows hangman images based on wrong guesses)
├── WordDisplay
│   └── LetterBox (provided starter component)
├── Keyboard
│   └── LetterButton
└── GameOverModal
```

**Step 1:** Broke the UI into components (see tree above)
**Step 2:** Built a static version first with hard-coded data
**Step 3:** Figured out what is state (word, guessedLetters, category, showModal)
**Step 4:** State lives in HangmanApp because all children need access to it
**Step 5:** Initial state set in constructor()
**Step 6:** Inverse data flow - children call parent functions through props
**Step 7:** Word data comes from a client-side word bank (src/data/words.js)

## React Concepts Used

- **Class components** with render(), constructor(), setState()
- **Props** for passing data from parent to child
- **State** for data that changes (word, guessed letters, etc)
- **Inverse data flow** - children call parent functions via callback props
- **Binding** in constructor so `this` works in event handlers
- **Immutable state updates** using spread operator
- **Lifecycle methods** - componentDidMount, componentWillUnmount
- **Conditional rendering** for modal visibility and letter button states

## Project Structure

```
├── src/
│   ├── assets/
│   │   ├── hangman0.png
│   │   ├── hangman1.png
│   │   ├── hangman2.png
│   │   ├── hangman3.png
│   │   ├── hangman4.png
│   │   └── hangman5.png
│   ├── components/
│   │   ├── HangmanDrawing.jsx
│   │   ├── LetterBox.jsx
│   │   ├── WordDisplay.jsx
│   │   ├── Keyboard.jsx
│   │   ├── LetterButton.jsx
│   │   ├── GameOverModal.jsx
│   │   └── NewGameButton.jsx
│   ├── data/
│   │   └── words.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── Dockerfile
├── index.html
├── package.json
└── vite.config.js
```

## Tech Stack

- React 18 (class components)
- Vite
- Docker + Nginx