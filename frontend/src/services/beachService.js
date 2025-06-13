export const fetchBeaches = async (filters) => {
  const query = new URLSearchParams();

  if (filters.location) query.append('location', filters.location);
  if (filters.search) query.append('search', filters.search);

  const res = await fetch(`https://goa-tourism-backend-production.up.railway.app/api/beaches?${query.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch beaches');
  const data = await res.json();
  return data;
};
