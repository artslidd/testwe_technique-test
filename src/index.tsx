import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App/App";
import { NotFound } from "./pages/NotFound";
import { CharacterPage } from "./pages/Character";
import { BookPage } from "./pages/Book";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* Home */}
        <Route exact path="/" component={App} />
        {/* Character page */}
        <Route path="/characters/:characterId" component={CharacterPage} />
        {/* Book page */}
        <Route path="/books/:bookId" component={BookPage} />
        {/* In case a wrong path is entered, fallback to the NotFound page */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
