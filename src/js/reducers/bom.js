/*import {} from '../actions/bom';*/

const initialState = {
  items : [],
  isFetching: false,
  errorMessage: null,
  addItemModalOpen: {
    open: true,
    item: null
  }
};

const handlers = {
};

export default function (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
};
