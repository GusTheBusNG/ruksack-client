import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ruksack-dev.herokuapp.com/',
  timeout: 4000,
  headers: {'Content-Type': 'application/json'}
});

export default instance;
