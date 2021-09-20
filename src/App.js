
import './App.css';
import Dashboard from './components/Dashboard';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ManageGroups from './components/ManageGroups';
import ManageRoles from './components/ManageRoles';

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

          <Route path="/dash-board/admin/manage-roles">
          <ManageRoles/>
          </Route>

          <Redirect to="/dash-board/admin/manage-user"/>
        </Switch>
    </Router>
  );
}

export default App;
