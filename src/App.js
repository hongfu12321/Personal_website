import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main';
// import Index from './pages/index';

// 
const Index = lazy(() => import('./pages/index'))

const { ROOT_URL } = process.env;

const App = () => (
  <BrowserRouter basename={ROOT_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default App;
