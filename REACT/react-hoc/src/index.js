import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './component/example1/index';
import * as serviceWorker from './serviceWorker';
import Example3 from './component/example3'

ReactDOM.render(<Example3 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
