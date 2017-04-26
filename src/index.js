/* eslint-env browser */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './components/App';
// import Daily from './components/Daily';
import About from './components/About';

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
};

render(<Root />, document.getElementById('root'));
