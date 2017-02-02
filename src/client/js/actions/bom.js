import axios from 'axios';
import qs from 'qs';


export const FETCH_BOM_ITEMS_REQUEST = 'FETCH_BOM_ITEMS_REQUEST';
export const FETCH_BOM_ITEMS_SUCCESS = 'FETCH_BOM_ITEMS_SUCCESS';
export const FETCH_BOM_ITEMS_FAILURE = 'FETCH_BOM_ITEMS_FAILURE';
export const ITEM_MODAL_OPEN = "ITEM_MODAL_OPEN";
export const ITEM_MODAL_CLOSE = "ITEM_MODAL_CLOSE";

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
