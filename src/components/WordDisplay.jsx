import React from 'react';
import LetterBox from './LetterBox.jsx';

class WordDisplay extends React.Component {
  render() {
    const { word, guessedLetters, isGameOver } = this.props;

    const letters = word.split('');

    return (
      <div className="word-display">
        {letters.map((letter, index) => {
          const isGuessed = guessedLetters.includes(letter.toUpperCase());
          const shouldShow = isGuessed || isGameOver;

          return (
            <LetterBox
              key={`letter-${index}`}
              letter={letter.toUpperCase()}
              isVisible={shouldShow}
              boxStyle={
                isGameOver && !isGuessed
                  ? {
                      borderColor: '#c0392b',
                      backgroundColor: 'rgba(192, 57, 43, 0.15)',
                      color: '#e74c3c',
                    }
                  : {}
              }
            />
          );
        })}
      </div>
    );
  }
}

export default WordDisplay;
