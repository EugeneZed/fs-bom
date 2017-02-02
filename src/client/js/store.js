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
import { routerReducer, routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router';
import homeReducer from './reducers/home';
import bomReducer, * as bomSelectors from './reducers/bom';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import transitionReducer from './reducers/transitions'

const composeEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middlewares = [thunk, routerMiddleware(browserHistory)];

export default createStore(
  combineReducers({
    home:homeReducer,
    bom: bomReducer,
    routing: routerReducer,
    form: formReducer,
    transitions: transitionReducer
  }),
  composeEnhancers(
      applyMiddleware(...middlewares)
    )
)



export const getHomeState = (state) => state.home;
export const getBomItems = (state,bomID) => bomSelectors.getBomItems(state.bom,bomID);
export const getBomItemViewModalItem = (state,bomID) => bomSelectors.getBomItemViewModalItem(state.bom,bomID);
