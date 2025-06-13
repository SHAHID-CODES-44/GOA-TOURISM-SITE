// frontend/src/services/wildlifeService.js

const API_URL = "https://goa-tourism-backend-production.up.railway.app/api/wildlife";

export const fetchWildlifeList = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch wildlife data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching wildlife:", error);
    throw error;
  }
};
