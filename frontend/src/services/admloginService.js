// frontend/src/services/admloginService.js
import axios from 'axios';

export const loginAdmin = async ({ username, password }) => {
  const response = await axios.post('https://goa-tourism-backend-production.up.railway.app/api/admin/login', {
    username,
    password,
  });
  return response.data;
};
