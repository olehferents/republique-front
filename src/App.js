import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <div>
      <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signUp" exact component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;
