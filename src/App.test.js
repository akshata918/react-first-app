import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, body, Footer} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nav />, div);
  ReactDOM.render(<Body />, div);
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
