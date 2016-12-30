/*H**********************************************************************
* FILENAME :        store.js
*
* DESCRIPTION :
*       Creates store for entire BOM subsystem.
*
* EXPORTS :
*       ---
*
* NOTES :
*       ---
*
* AUTHOR :    Jay Sridharan       START DATE :    22 Dec 16
*
*H*/

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer } from 'react-router-redux'
import homeReducer from './reducers/home';
import bomReducer from './reducers/bom';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

export default createStore(
  combineReducers({
    home:homeReducer,
    bom: bomReducer,
    routing: routerReducer,
    form: formReducer
  }),
  composeEnhancers(
      applyMiddleware(...middlewares)
    )
)
