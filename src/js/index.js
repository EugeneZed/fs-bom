/*H**********************************************************************
* FILENAME :        index.jsx
*
* DESCRIPTION :
*       Entry point for the BOM subsystem.
*
* EXPORTS :
*       ---
* NOTES :
*       ---
*
* AUTHOR :    Jay Sridharan       START DATE :    22 Dec 16
*
*H*/

import '../scss/index.scss';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory as history, IndexRoute} from 'react-router'
import { routes } from './Routes';
import store from './store';

render(

  <Provider store={store}>
      <Router routes={routes} history={history} onUpdate={() => window.scrollTo(0, 0)} />
  </Provider>
  , document.getElementById('mount'));
