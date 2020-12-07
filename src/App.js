import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CalendarPage from "./pages/CalendarPage";

const App = () => {
  return (
    <div>
      <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signUp" exact component={AuthPage} />
          <Route path="/calendar" exact component={CalendarPage} />
      </Switch>
    </div>
  );
}

export default App;
