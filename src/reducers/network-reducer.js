import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    GET_COMPANY_DATA_SUCCESS,
    GET_COMPANY_DATA_ERROR,
    POST_COMPANY_DATA_SUCCESS,
    POST_COMPANY_DATA_ERROR,
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/network-actions';

const initialState = {
    data: '',
    openModal: false,
    error: null,
    company: {
      username: '',
      companyName: '',
      url: '',
      location: '',
      description: '',
      notes: ''
    },
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

  if (action.type === GET_COMPANY_DATA_SUCCESS) {
    return Object.assign({}, state, {
      company: [...state.company, action.data],
      error: null
    });
  }
  if (action.type === GET_COMPANY_DATA_ERROR) {
    return Object.assign({}, state, { 
      error: action.error 
    });
  }

  if (action.type === POST_COMPANY_DATA_SUCCESS) {
    return Object.assign({}, state, {
      company: [...state.company, action.data],
      error: null
    });
  }
  if (action.type === POST_COMPANY_DATA_ERROR) {
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
}
