import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Hotel from './Hotel/Hotel';
import Hotels from './Hotels/Hotels';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Hotels} />
      <Route exact path="/hotels/:slug" component={Hotel} />
    </Switch>
  )
}

export default App;
