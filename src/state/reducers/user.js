import {
  AUTHENTICATE_ERROR,
  AUTHENTICATE_LOADING,
  AUTHENTICATE_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS
} from '../actions/user';

const initialState = {
  loading: false,
  error: null,
  data: null
};

export const signUp = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        loading: true
      };
  
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state;
  }
}

export const authenticate = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_LOADING:
      return {
        ...state,
        loading: true
      };
  
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };

    case AUTHENTICATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state;
  }
}
