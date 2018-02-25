import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Nav, Body, Footer} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nav />, document.getElementById('header'));
ReactDOM.render(<Body />, document.getElementById('main'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
