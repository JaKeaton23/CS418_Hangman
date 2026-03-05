import React from 'react';

// LetterBox component 
// Shows a single letter in a box, can be visible or hidden
class LetterBox extends React.Component {
  render() {
    const { letter, isVisible, boxStyle, letterStyle } = this.props;

    const defaultBoxStyle = {
      border: '2px solid #999',
      borderRadius: '4px',
      width: '50px',
      height: '55px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '26px',
      fontWeight: 'bold',
      fontFamily: 'monospace',
      backgroundColor: 'white',
      textTransform: 'uppercase',
    };

    const defaultLetterStyle = {
      visibility: isVisible ? 'visible' : 'hidden',
    };

    const combinedBoxStyle = { ...defaultBoxStyle, ...boxStyle };
    const combinedLetterStyle = { ...defaultLetterStyle, ...letterStyle };

    return (
      <div style={combinedBoxStyle}>
        <span style={combinedLetterStyle}>{letter}</span>
      </div>
    );
  }
}

export default LetterBox;