import React from 'react';
import img0 from '../assets/hangman0.png';
import img1 from '../assets/hangman1.png';
import img2 from '../assets/hangman2.png';
import img3 from '../assets/hangman3.png';
import img4 from '../assets/hangman4 (1).png';
import img5 from '../assets/hangman5.png';

// HangmanDrawing - shows a different image based on wrong guesses
// 6 images total (0-5), so the player gets 5 lives
class HangmanDrawing extends React.Component {
  render() {
    const images = [img0, img1, img2, img3, img4, img5];
    const { wrongGuesses } = this.props;

    return (
      <div className="hangman-drawing">
        <img
          src={images[wrongGuesses]}
          alt={'Hangman stage ' + wrongGuesses}
          width="220"
        />
      </div>
    );
  }
}

export default HangmanDrawing;