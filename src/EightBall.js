import React, { Component } from 'react';
import Button from './button';
import Phrase from './phrase';

class EightBall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phraseNum : null

    }
  }
  setPhraseNum () {
    this.setState({
      phraseNum : Math.floor(Math.random() * ((EightBall.PHRASES.length - 1)))
    });
  }
  render() {
    return (
      
      <div className="eightBallRest">
        <Button onClick={e => this.setPhraseNum()} />
        <Phrase phrase={EightBall.PHRASES[this.state.phraseNum]} />
      </div>
    );
  }
  
}
EightBall.PHRASES = [
  'Signs point to yes.',
  'Yes.',
  'Reply hazy, try again.',
  'Without a doubt.',
  'My sources say no.',
  'As I see it, yes.',
  'You may rely on it.',
  'Concentrate and ask again.',
  'Outlook not so good.',
  'It is decidedly so.',
  'Better not tell you now.',
  'Very doubtful.',
  'Yes - definitely.',
  'It is certain.',
  'Cannot predict now.',
  'Most likely.',
  'Ask again later.',
  'My reply is no.',
  'Outlook good.',
  'Don\'t count on it.'
];


export default EightBall;
