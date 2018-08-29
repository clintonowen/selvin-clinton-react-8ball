import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EightBall from './EightBall';
import registerServiceWorker from './registerServiceWorker';

const PHRASES = [
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

ReactDOM.render(<EightBall phrases={PHRASES}/>, document.getElementById('root'));
registerServiceWorker();
