import React from 'react';
import LetterButton from './LetterButton.jsx';

class Keyboard extends React.Component {
  render() {
    const { guessedLetters, correctLetters, onLetterClick, disabled } = this.props;

    const rows = [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ];

    return (
      <div className="keyboard">
        {rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="keyboard-row">
            {row.map((letter) => {
              const isGuessed = guessedLetters.includes(letter);
              const isCorrect = correctLetters.includes(letter);

              let status = 'available';
              if (isGuessed && isCorrect) status = 'correct';
              else if (isGuessed && !isCorrect) status = 'wrong';

              return (
                <LetterButton
                  key={`key-${letter}`}
                  letter={letter}
                  status={status}
                  onClick={onLetterClick}
                  disabled={disabled || isGuessed}
                />
              );
            })}
          </div>
        ))}
      </div>
    );
  }
}

export default Keyboard;
