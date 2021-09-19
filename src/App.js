
import './App.css';
import Dashboard from './components/Dashboard';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ManageGroups from './components/ManageGroups';

function App() {
  return (
    <Router>
          <Switch>
          <Route path="/dash-board/admin/manage-user">
          <Dashboard/>
          </Route>

          <Route path="/dash-board/admin/manage-groups">
          <ManageGroups/>
          </Route>

          <Route path="/">
          <Dashboard/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
