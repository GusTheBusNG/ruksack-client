import {
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS
} from '../actions/user';

const initailState = {
  loading: false,
  error: null,
  data: null
};

const signUp = (state = initailState, action) => {
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

export default signUp;