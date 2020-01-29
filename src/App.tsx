import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { ROUTES } from "./constants";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import InfoPopup from "./components/InfoPopup";
import Details from "./components/Details";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={ROUTES.LANDING_URL}>
            <Redirect to={ROUTES.GALLERY_URL} />
          </Route>
          <Route path={ROUTES.DETAILS_ROUTER} component={Details} />
          <Route path={ROUTES.GALLERY_URL} component={Gallery} />
        </Switch>
        <Route path={ROUTES.PREVIEW_ROUTER} component={InfoPopup} />
      </div>
    </Router>
  );
};

export default App;
