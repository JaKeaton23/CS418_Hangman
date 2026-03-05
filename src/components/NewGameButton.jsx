import React from 'react';

class NewGameButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onNewGame();
  }

  render() {
    return (
      <button className="header-new-game-btn" onClick={this.handleClick}>
        New Game
      </button>
    );
  }
}

export default NewGameButton;
