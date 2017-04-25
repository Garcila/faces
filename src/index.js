/* eslint-env browser */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './components/App';
import Daily from './components/Daily';

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Daily} />
        <Route path='/image' component={App} />
      </div>
    </Router>
  );
};

render(<Root />, document.getElementById('root'));
