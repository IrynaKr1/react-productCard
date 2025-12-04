import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://randomuser.me/api',
});

export const getUsers = () => axiosInstance.get('/?page=3&results=10');
