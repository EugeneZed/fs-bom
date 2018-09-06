import axios from 'axios';
import qs from 'qs';


export const FETCH_BOM_ITEMS_REQUEST = 'FETCH_BOM_ITEMS_REQUEST';
export const FETCH_BOM_ITEMS_SUCCESS = 'FETCH_BOM_ITEMS_SUCCESS';
export const FETCH_BOM_ITEMS_FAILURE = 'FETCH_BOM_ITEMS_FAILURE';
export const ITEM_MODAL_OPEN = "ITEM_MODAL_OPEN";
export const ITEM_MODAL_CLOSE = "ITEM_MODAL_CLOSE";
export const ADD_ITEM_MODAL_OPEN = "ADD_ITEM_MODAL_OPEN";
export const ADD_ITEM_MODAL_CLOSE = "ADD_ITEM_MODAL_CLOSE";
export const FETCH_ADD_ITEM_MODAL_INFO_REQUEST = 'FETCH_ADD_ITEM_MODAL_INFO_REQUEST';
export const FETCH_ADD_ITEM_MODAL_INFO_SUCCESS = 'FETCH_ADD_ITEM_MODAL_INFO_SUCCESS';
export const FETCH_ADD_ITEM_MODAL_INFO_FAILURE = 'FETCH_ADD_ITEM_MODAL_INFO_FAILURE';

export const SUBMIT_ADD_ITEM_MODAL = "SUBMIT_ADD_ITEM_MODAL";

export const fetchBomItems = (bomID) => (dispatch) => {

  // define action creators for request, success and failure
  let requestBomItems = () => ({
    type: FETCH_BOM_ITEMS_REQUEST
  })

  let recieveBomItemsSuccess = (response) => ({
    type: FETCH_BOM_ITEMS_SUCCESS,
    response: response,
    bomID: bomID
  })

  let recieveBomItemsFailure = (error) => ({
    type: FETCH_BOM_ITEMS_FAILURE,
    error: error,
    bomID: bomID
  })

  // begin request by dispatching request action
  dispatch(requestBomItems());

  //return promise
  return axios
    .post("/api/getBomItems",qs.stringify({
      bomID:bomID
    }))
    .then(response => {
      dispatch(recieveBomItemsSuccess(response.data))
    })
    .catch(error => {
      dispatch(recieveBomItemsFailure(error))
    });
}
export const openItemModal = (bomID, itemID) => (dispatch) => {
  dispatch({
    type: ITEM_MODAL_OPEN,
    itemID: itemID,
    bomID: bomID
  })
}
export const closeItemModal = (bomID) => (dispatch) => {
  dispatch({
    type: ITEM_MODAL_CLOSE,
    bomID: bomID
  })
}

export const openAddBomItemModal = () => (dispatch) => {
  dispatch({
    type: ADD_ITEM_MODAL_OPEN
  })
}

export const closeAddBomItemModal = () => (dispatch) => {
  dispatch({
    type: ADD_ITEM_MODAL_CLOSE
  })
}


export const grabAddBomItemModalInfo = (formValues) => (dispatch) => {
  let requestGrabInfo = () => ({
    type: FETCH_ADD_ITEM_MODAL_INFO_REQUEST
  })

  let recieveGrabInfoSuccess = (response) => ({
    type: FETCH_ADD_ITEM_MODAL_INFO_SUCCESS,
    response: response
  })

  let recieveGrabInfoFailure = (error) => ({
    type: FETCH_ADD_ITEM_MODAL_INFO_FAILURE,
    error: error
  })

  // begin request by dispatching request action
  dispatch(requestGrabInfo());

  //return promise
  return axios
    .post("/api/scrapeVendorSite",qs.stringify({
      vendor:formValues.vendor,
      partNumber: formValues.partNumber,
      needed:formValues.needed,
      spare:formValues.spare,
      inShop:formValues.inShop
    }))
    .then(response => {
      dispatch(recieveGrabInfoSuccess(response.data))
    })
    .catch(error => {
      dispatch(recieveGrabInfoFailure(error))
    });
}

export const submitAddBomItemModal = () => (dispatch) => {
    dispatch({
    type: SUBMIT_ADD_ITEM_MODAL
  })
}
