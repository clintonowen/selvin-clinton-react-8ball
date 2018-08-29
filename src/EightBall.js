import React, { Component } from 'react';
import Button from './button';
import Phrase from './phrase';

class EightBall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phraseNum : null,
      shaker: "eightBallRest",
    }
  }

  setPhraseNum () {
    this.setState({
      phraseNum : Math.floor(Math.random() * ((EightBall.PHRASES.length - 1)))
    });
  }

  render() {
    return (
      <div>
        <Button className="button" onClick={e => {
          this.setState({
            phraseNum: null,
            shaker: "eightBallRest shake"
          });
          setTimeout(() => {
            this.setState({
              shaker: "eightBallRest"
            });
            this.setPhraseNum();
          }, 2500);
        }} />

        <div className={this.state.shaker}>
          <Phrase phrase={EightBall.PHRASES[this.state.phraseNum]} />
        </div>
      </div>
    );
  }
  
}
EightBall.PHRASES = [
  'Signs point to yes.',
  'Sadly, yes.',
  'Ask The Internet.',
  'Without a doubt.',
  'My sources say no.',
  'As I see it, yes.',
  'You may rely on it.',
  'Concentrate and ask again.',
  'Jesus Christ! I hope not!',
  'It is decidedly so.',
  'Better not tell you now.',
  'Very doubtful.',
  'Yes, but do it drunk A.F.',
  'It is certain.',
  'Cannot predict now.',
  'Don\'t swipe right, it\'s your cousin.',
  'WHAT DO YOU WANT TO HEAR?',
  'My reply is Hell No.',
  'Do swipe right, it\'s your hot cousin!',
  'Don\'t count on it.',
  'Seek Help',
  'Now You\'re Obsessing',
  'All Signs Point To Me Not Giving A S**t',
  'Just Google it!',
  'You\'re not shaking it hard enough!',
  '404 Error!',
  'Don\'t ask me!'
];


export default EightBall;
