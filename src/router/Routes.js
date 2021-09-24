import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Landingpage from '../pages/Landingpage';
import Login from '../pages/Login';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/permata-test" exact>
          <Landingpage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/dashboar" exact>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}
