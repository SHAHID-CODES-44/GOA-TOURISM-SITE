const BASE_URL = 'https://goa-tourism-backend-production.up.railway.app/api/food';

export const fetchRestaurants = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  const response = await fetch(`${BASE_URL}/restaurants?${query}`);
  if (!response.ok) throw new Error('Failed to fetch restaurants');
  return response.json();
};

export const fetchRestaurantById = async (id) => {
  const response = await fetch(`${BASE_URL}/restaurants/${id}`);
  if (!response.ok) throw new Error('Failed to fetch restaurant');
  return response.json();
};
