import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Repositories from '../pages/Repositories'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/repositories/:repository_name+" component={Repositories}/>
    </Switch>
  </BrowserRouter>
)

export default Routes
