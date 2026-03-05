import React from 'react';

class LetterButton extends React.Component {
  constructor(props) {
    super(props);
    // Bind custom method to this component (Chapter 2 pattern)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.props.disabled) {
      // INVERSE DATA FLOW: child calls parent's function
      this.props.onClick(this.props.letter);
    }
  }

  render() {
    const { letter, status, disabled } = this.props;

    const classNames = `letter-button ${status} ${disabled ? 'disabled' : ''}`;

    return (
      <button
        className={classNames}
        onClick={this.handleClick}
        disabled={disabled}
        aria-label={`Guess letter ${letter}`}
      >
        {letter}
      </button>
    );
  }
}

export default LetterButton;
