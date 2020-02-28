import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" component={SingUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}