import axios from 'axios';

export const SIGNUP_LOADING = 'SIGNUP_LOADING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const signUp = ({ email, password }) => async dispatch => {
  dispatch({ type: SIGNUP_LOADING });

  try {
    const { data } = await axios.post('https://ruksack-dev.herokuapp.com/new-user', {
      email,
      password,
      role: 'participant'
    });

    localStorage.setItem('ruksack-token', data.auth);

    dispatch({ type: SIGNUP_SUCCESS, data: data});
  } catch (error) {
    dispatch({ type: SIGNUP_ERROR });
  }
}