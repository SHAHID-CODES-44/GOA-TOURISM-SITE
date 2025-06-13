const API_BASE_URL = 'https://goa-tourism-backend-production.up.railway.app/api';

export const fetchAdventures = async () => {
  const response = await fetch(`${API_BASE_URL}/adventure`);
  if (!response.ok) {
    throw new Error('Failed to fetch adventures');
  }
  return await response.json();
};
