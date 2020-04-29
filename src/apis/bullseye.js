import axios from 'axios';

export const BullsEyeAPI = axios.create({
  baseURL: 'https://bb-bullseye-api.herokuapp.com',
  headers: {
    serviceName: 'bullseye'
  }
});
