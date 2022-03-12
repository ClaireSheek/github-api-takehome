import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "./pages/Landing";
import UserLanding from "./pages/UserLanding";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route exact path="/" element={<Navigate to="/github" />} />
          <Route exact path="/github" element={<Landing />} />
          <Route exact path="/github/:username" element={<UserLanding />} />
        </Switch>
      </div>
      <style jsx>{`
        .wraper {
          display: grid;
          grid-template-columns: 1fr 2fr;
        }
      `}</style>
    </Router>
  );
};

export default App;
