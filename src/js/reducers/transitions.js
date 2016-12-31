/*H**********************************************************************
* FILENAME :        js/reducers/transitions.js
*
* DESCRIPTION :
*       Defines reducers for actions dispatched in the Home component.
*
* EXPORTS :
*       const transitionReducer (state, action)
*
* NOTES :
*       ---
*
* AUTHOR :    Jay Sridharan       START DATE :    30 Dec 16
*
*H*/


import {
  WILL_ENTER,
  WILL_LEAVE,
  TRANSITION_COMPLETE,
  WILL_ENTER_ACTION,
  WILL_LEAVE_ACTION,
  TRANSITION_COMPLETE_ACTION,
  REGISTER_COMPONENT_ACTION,
  DESTROY_COMPONENT_ACTION
} from '../actions/transitions';
const initialState = {
  home: TRANSITION_COMPLETE,
  bom: TRANSITION_COMPLETE
};

const handlers = {

  [WILL_LEAVE_ACTION]: (state,action) => ({[action.key]: WILL_LEAVE}),
  [WILL_ENTER_ACTION]: (state,action) => ({[action.key]: WILL_ENTER}),
  [TRANSITION_COMPLETE_ACTION]: (state,action) => ({[action.key]: TRANSITION_COMPLETE}),
  [REGISTER_COMPONENT_ACTION]: (state,action) => ({[action.key]: TRANSITION_COMPLETE}),
  [DESTROY_COMPONENT_ACTION] : (state,action) => ({[action.key]: undefined})
};

export default function transitionReducer (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
};
