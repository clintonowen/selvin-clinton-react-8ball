import React, { Component } from 'react';
import Button from './button';
import Phrase from './phrase';

class EightBall extends Component {
  render() {
    return (
      <div className="EightBall">
        <Button />
        <Phrase />
      </div>
    );
  }
}

export default EightBall;
