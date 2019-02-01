/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import UserListPage from 'containers/UserListPage/Loadable';
import EditPage from 'containers/EditPage/Loadable';
import Navbar from 'components/Navbar';

// Import global styles
import 'styles/default.scss';

import styles from './style.scss';

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/list" component={UserListPage} />
        <Route exact path="/edit" component={EditPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
