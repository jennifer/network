import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/network-actions';

const initialState = {
  data: '',
  error: null,
  openModal: false
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: null
    });
  } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }  
  
  if (action.type === OPEN_MODAL) {
    return Object.assign({}, state, { openModal: true });
  }
  if (action.type === CLOSE_MODAL) {
    return Object.assign({}, state, { openModal: false });
  }

  return state;
  
/*
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modals: state.modals.concat(action.obj)
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modals: state.modals.filter(item => item.id !== action.obj.id),
      };
    default:
      return state;
  }
*/
};