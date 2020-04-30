import axios from 'axios';

const headers = { serviceName: 'bullseye' };

const BullsEyeAPI = axios.create({
  headers,
  baseURL: 'https://bb-bullseye-api.herokuapp.com',
});

BullsEyeAPI.interceptors.request.use(config => {
  const updatedConfig = { ...config };
  const token = window.localStorage.getItem('bullseyeAuth');

  if (token) updatedConfig.headers.Authorization = token;

  return updatedConfig;
}, err => {
  return Promise.reject(err);
})

BullsEyeAPI.interceptors.response.use(response => {
  const authToken = response?.headers?.authorization;
  
  if (authToken) {
    window.localStorage.setItem('bullseyeAuth', authToken);
  } else {
    window.localStorage.removeItem('bullseyeAuth');
  }

  return response;
}, err => {
  return Promise.reject(err);
});

export default BullsEyeAPI
