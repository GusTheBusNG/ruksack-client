import axios from '../../lib/axios';

export const SIGNUP_LOADING = 'SIGNUP_LOADING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const AUTHENTICATE_LOADING = 'SIGNUP_LOADING';
export const AUTHENTICATE_SUCCESS = 'SIGNUP_SUCCESS';
export const AUTHENTICATE_ERROR = 'SIGNUP_ERROR';

export const signUp = ({ email, password }) => async dispatch => {
  dispatch({ type: SIGNUP_LOADING });

  console.log('hit');

  try {
    const { data } = await axios.post('new-user', {
      email,
      password,
      role: 'participant'
    });

    setJWT(data.auth);

    dispatch({ type: SIGNUP_SUCCESS, data: data });
  } catch (error) {
    dispatch({ type: SIGNUP_ERROR });
  }
}

export const authenticate = ({ email, password }) => async dispatch => {
  dispatch({ type: AUTHENTICATE_LOADING });

  try {
    const { data } = await axios.post('login', {
      email,
      password
    });

    setJWT(data.auth);

    dispatch({ type: AUTHENTICATE_SUCCESS, data: data });
  } catch (error) {
    dispatch({ type: AUTHENTICATE_ERROR });
  }
}

const setJWT = (JWT) => localStorage.setItem('ruksack-token', JWT);