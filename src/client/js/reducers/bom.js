import omit from 'lodash/omit';
import {
  FETCH_BOM_ITEMS_REQUEST,
  FETCH_BOM_ITEMS_SUCCESS,
  FETCH_BOM_ITEMS_FAILURE,
  ITEM_MODAL_OPEN,
  ITEM_MODAL_CLOSE
} from '../actions/bom';

const initialState = {
  itemsByBom : {},
  fetchingByBom: {},
  errorsByBom: {},
  viewItemModalOpenByBom: {}
};

const handlers = {
  [FETCH_BOM_ITEMS_SUCCESS]: (state, action) => ({
    itemsByBom:
      {...state.itemsByBom,[action.bomID]: action.response},
    fetchingByBom:
      {...state.fetchingByBom,[action.bomID]: false},
    }),
  [FETCH_BOM_ITEMS_FAILURE]: (state, action) => ({
    errorsByBom:
      {...state.errorsByBom,[action.bomID]: action.response},
    fetchingByBom:
      {...state.fetchingByBom,[action.bomID]: false},
    }),
  [FETCH_BOM_ITEMS_REQUEST]: (state, action) => ({
    fetchingByBom:
      {...state.fetchingByBom,[action.bomID]: true},
    }),
  [ITEM_MODAL_OPEN]: (state,action) => ({
    viewItemModalOpenByBom:
    {...state.viewItemModalOpenByBom, [action.bomID]: action.itemID}
  }),
  [ITEM_MODAL_CLOSE]: (state,action) => ({
    viewItemModalOpenByBom: omit(state.viewItemModalOpenByBom, action.bomID)
  })

};

export default function (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
};

export const getBomItems = (state,bomID) => Object.values(state.itemsByBom[bomID] || {});
export const getBomItemViewModalItem =
  (state,bomID) =>
    (state.itemsByBom[bomID] || false)[state.viewItemModalOpenByBom[bomID]] || false

export const getItemNeeded = (item) => item.unitsNeeded + item.spareUnitsNeeded + item.unitsInShop

export const getItemStatus = (item) => {
    var needed = getItemNeeded(item);
    if (item.dateVerified == 0) {
        return 'Pending Verification';
    }
    else if(item.dateVerified > 0){
      if(item.ordered > 0){
        if(item.received == item.ordered){
          if(item.received == needed){
            return 'Fully Received';
          }
          else if(item.ordered < needed){
            return 'Partially Received';
          }
          else if(item.ordered > needed){
            return 'Fully Received';
          }
        }
        else if(item.ordered > item.received){

          if(item.received != 0){
            if(item.received < needed){
              return 'Partially Received, Order Placed';
              //Partially received, also ordering
            }
            else{
              return 'Fully Received';
              //fully received
            }
          }
          else{
            if(item.ordered >= needed){
              return 'Fully Ordered';
              //ordered
            }
            else{
              return 'Partially Ordered';
              //partially ordered
            }
          }
        }
        else if(item.ordered < item.received){
          alert("There could be a really big problem. Tell Jay now.");
        }
      }
      else{
        return "Verified";
      }
    }
    else{
      if(item.dateVerified == -1){
        return 'Hidden';
      }
    }
  }
