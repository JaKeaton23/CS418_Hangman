import React from 'react';
class GameOverModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame() {
    this.props.onNewGame();
  }

  render() {
    const { isVisible, isWinner, word } = this.props;

    if (!isVisible) return null;

    return (
      <div className="modal-overlay">
        <div className={`modal-content ${isWinner ? 'modal-win' : 'modal-lose'}`}>
          <div className="modal-icon">
            {isWinner ? '🎉' : '💀'}
          </div>
          <h2 className="modal-title">
            {isWinner ? 'You Won!' : 'Game Over'}
          </h2>
          <p className="modal-message">
            {isWinner
              ? 'Congratulations! You guessed the word!'
              : `The word was:`}
          </p>
          <p className="modal-word">{word.toUpperCase()}</p>
          <button className="new-game-button" onClick={this.handleNewGame}>
            {isWinner ? 'Play Again' : 'Try Again'}
          </button>
        </div>
      </div>
    );
  }
}

export default GameOverModal;
