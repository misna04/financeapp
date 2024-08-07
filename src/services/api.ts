import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://192.168.124.130:100/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// endpoints
const authLogin = (data: any) => api.post('/auth/login', data);

export const apis = {
  authLogin,
};

export default apis;
