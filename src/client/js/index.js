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
import { Router, browserHistory,useRouterHistory } from 'react-router'
import { routes } from './Routes';
import { Provider } from 'react-redux';
import store from './store';
// const createHistory = (basename) => {
//   return useRouterHistory(createBrowserHistory)({
//     basename: basename
//   })
// }
//
// const history = createHistory()

render(

  <Provider store={store}>
      <Router routes={routes} history={browserHistory} onUpdate={() => window.scrollTo(0, 0)} />
  </Provider>
  , document.getElementById('mount'));
