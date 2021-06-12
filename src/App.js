import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './layouts/Main';
import './static/css/main.scss';

const Index = lazy(() => import('./pages/Index'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'));

const { ROOT_URL } = process.env;

const App = () => (
  <BrowserRouter basename={ROOT_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default App;

