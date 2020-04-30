import axios from 'axios';

const token = window.localStorage.getItem('bullseyeAuth');

const headers = { serviceName: 'bullseye' };
if (token) headers.Authorization = token;

export const BullsEyeAPI = axios.create({
  baseURL: 'https://bb-bullseye-api.herokuapp.com',
  headers
});
