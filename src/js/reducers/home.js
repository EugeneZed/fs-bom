/*H**********************************************************************
* FILENAME :        js/reducers/home.js
*
* DESCRIPTION :
*       Defines reducers for actions dispatched in the Home component.
*
* EXPORTS :
*       const homeReducer (state, action)
*
* NOTES :
*       ---
*
* AUTHOR :    Jay Sridharan       START DATE :    22 Dec 16
*
*H*/


import {
  FETCH_BOMS_SUCCESS,
  FETCH_BOMS_FAILURE,
  FETCH_BOMS_REQUEST,
  ADD_BOM_REQUEST,
  ADD_BOM_SUCCESS,
  ADD_BOM_FAILURE,
  ADD_BOM_OPEN,
  ADD_BOM_CLOSE,
  ACCORDION_CHANGE
} from '../actions/home';

import maxBy from 'lodash/maxBy'

const initialState = {
  boms : [],
  isFetching: false,
  errorMessage: null,
  addBomModalOpen: false,
  activeAccordion: null
};

const handlers = {

  [FETCH_BOMS_SUCCESS]: (state, action) => ({boms: action.response, isFetching: false, activeAccordion: maxBy(action.response, o=>o.season).season}),
  [FETCH_BOMS_FAILURE]: (state, action) => ({isFetching: false, errorMessage: "Something went wrong!"}),
  [FETCH_BOMS_REQUEST]: (state, action) => ({isFetching: true}),
  [ADD_BOM_SUCCESS]: (state,action) => ({
    boms : [...state.boms, action.response],
    addBomModalOpen: false,
    activeAccordion: parseInt(action.response.season)
  }),
  [ADD_BOM_OPEN]: (state,action) => ({addBomModalOpen: true}),
  [ADD_BOM_CLOSE]: (state,action) => ({addBomModalOpen: false}),
  [ACCORDION_CHANGE]: (state,action) => ({activeAccordion: action.year})

};

export default function homeReducer (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
};
