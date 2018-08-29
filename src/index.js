import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EightBall from './EightBall';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<EightBall/>, document.getElementById('root'));
registerServiceWorker();
