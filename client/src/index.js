import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BaseLayout from './components/BaseLayout'
import VegetableTracker from './components/VegetableTracker'
import PerennialTracker from './components/PerrenialTracker'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <BaseLayout>
          <Route component={App} path='/' exact />
          <Route component={VegetableTracker} path='/vegetables' />
          <Route component={PerennialTracker} path='/perennials' />
        </BaseLayout>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
