import React, { Component } from 'react';
import Button from './button';
import Phrase from './phrase';

class EightBall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phraseNum : null,
      shaker: "ball",
    }
  }

  setPhraseNum () {
    this.setState({
      phraseNum : Math.floor(Math.random() * ((EightBall.PHRASES.length - 1)))
    });
  }

  render() {
    return (
      <div className="eightBall">

        <Button className="button" onClick={e => {
          this.setState({
            phraseNum: null,
            shaker: "ball shake"
          });
          setTimeout(() => {
            this.setState({
              shaker: "ball"
            });
            this.setPhraseNum();
          }, 1500);
        }} />

        <div className={this.state.shaker}>
          <Phrase phrase={EightBall.PHRASES[this.state.phraseNum]} />
        </div>
        
      </div>
    );
  }

}

EightBall.PHRASES = [
  'Yeah, and I\'m the Pope.',
  'Sadly, yes.',
  'Ask the Internet.',
  'Dumb question. Ask another.',
  'Whatever.',
  'Jesus Christ! I hope not!',
  'Better not tell you... ever!',
  'Yes, but do it drunk AF.',
  'WHAT DO YOU WANT TO HEAR?!',
  'My reply is Hell No.',
  'You\'re being a little extra right now.',
  'Don\'t count on it.',
  'Seek help.',
  'Now you\'re obsessing.',
  'All signs point to me not giving a s**t.',
  'Just Google it!',
  'You\'re not shaking it hard enough!',
  '404 Not Found',
  'Don\'t ask me!'
];

export default EightBall;
