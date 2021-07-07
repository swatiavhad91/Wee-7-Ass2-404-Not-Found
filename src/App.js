import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Screen1 from './Components/Screen1';
import NotFound from './Components/Screen2';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Screen1} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));

export default App;