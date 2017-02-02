/*H**********************************************************************
* FILENAME :        js/actions/home.js
*
* DESCRIPTION :
*       Defines action names and action creators for the Home component.
*
* EXPORTS :
*       const ADD_BOM
*       const FETCH_BOMS_REQUEST
*       const FETCH_BOMS_SUCCESS
*       const FETCH_BOMS_FAILURE
*       const ADD_BOM_REQUEST
*       const ADD_BOM_SUCCESS
*       const ADD_BOM_FAILURE
*       const ADD_BOM_OPEN
*       const ADD_BOM_CLOSE
*       const ACCORDION_CHANGE
*       const fetchBoms()
*       const addBom( String name, int season)
*       const accordionChange( int year)
*
* NOTES :
*       ---
*
* AUTHOR :    Jay Sridharan       START DATE :    22 Dec 16
*
*H*/

import axios from 'axios';
import qs from 'qs';
/*******Action Names**********/
export const ADD_BOM = 'ADD_BOM';
export const FETCH_BOMS_REQUEST = 'FETCH_BOMS_REQUEST';
export const FETCH_BOMS_SUCCESS = 'FETCH_BOMS_SUCCESS';
export const FETCH_BOMS_FAILURE = 'FETCH_BOMS_FAILURE';
export const ADD_BOM_REQUEST = 'ADD_BOM_REQUEST';
export const ADD_BOM_SUCCESS = 'ADD_BOM_SUCCESS';
export const ADD_BOM_FAILURE = 'ADD_BOM_FAILURE';
export const ADD_BOM_OPEN = 'ADD_BOM_OPEN';
export const ADD_BOM_CLOSE = 'ADD_BOM_CLOSE';
export const ACCORDION_CHANGE = 'ACCORDION_CHANGE';
export const HOME_WILL_ENTER = 'HOME_WILL_ENTER';
export const HOME_WILL_LEAVE = 'HOME_WILL_LEAVE';
export const HOME_TRANSITION_COMPLETE = 'HOME_TRANSITION_COMPLETE';


/***************************/

/*******Action Creators**********/

// a thunk (returns a function that accepts dispatch that returns an action(or promise in this case))
// uses redux-thunk middleware
export const fetchBoms = () => (dispatch) => {

  // define action creators for request, success and failure
  let requestBoms = () => ({
    type: FETCH_BOMS_REQUEST
  })

  let recieveBomsSuccess = (response) => ({
    type: FETCH_BOMS_SUCCESS,
    response: response
  })

  let recieveBomsFailure = (error) => ({
    type: FETCH_BOMS_FAILURE,
    error: error
  })

  // begin request by dispatching request action
  dispatch(requestBoms());

  //return promise
  return axios
    .post("/api/getBoms")
    .then(response => {
      dispatch(recieveBomsSuccess(response.data))
    })
    .catch(error => {
      dispatch(recieveBomsFailure(error))
    });
}

export const addBom = (name, season) => (dispatch) => {

  // define action creators for request, success and failure
  let requestAddition = () => ({
    type: ADD_BOM_REQUEST,
    name: name,
    season: season
  })

  let recieveAdditionSuccess = (response) => ({
    type: ADD_BOM_SUCCESS,
    response: response
  })

  let recieveAdditionFailure = (error) => ({
    type: ADD_BOM_FAILURE,
    error: error
  })

  // begin request by dispatching request action
  dispatch(requestAddition());

  //return promise
  return axios
    .post("./api/addBom",qs.stringify({
      name: name,
      season: season
    }))
    .then(response => {
      dispatch(recieveAdditionSuccess(response.data))
    })
    .catch(error => {
      console.log(error);
      dispatch(recieveAdditionFailure(error))
    });
}

export const addBomModalOpen = () => ({type: ADD_BOM_OPEN})
export const addBomModalClose = () => ({type: ADD_BOM_CLOSE})
export const accordionChange = (year) => ({type: ACCORDION_CHANGE, year: typeof year =="undefined" ? null:year})
export const willEnter = () => ({type: HOME_WILL_ENTER})
export const willLeave = () => ({type: HOME_WILL_LEAVE})
export const transitionComplete = () => ({type: HOME_TRANSITION_COMPLETE})

/***************************/
