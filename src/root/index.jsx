import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PirvateRoute from './privateRoute'
import Home from '../component/Home'
import Login from '../component/Login'
import Navbar from '../component/Navbar'
import AccountantPage from '../component/AccountantPage'
import LeaderPage from '../component/LeaderPage'
import WorkerPage from '../component/WorkerPage'

const Routing = () => (
  <Router>
    <Switch>
      <Route path="/login" />
      <Route path="/" component={Navbar} />
    </Switch>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
    <Switch>
      <PirvateRoute exact path="/buxgalter" component={AccountantPage} />
      <PirvateRoute exact path="/worker" component={WorkerPage} />
      <PirvateRoute exact path="/king" component={LeaderPage} />
      <Redirect from="*" to="/login" />
    </Switch>
  </Router>
)

export default Routing