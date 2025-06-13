import Restaurant from '../models/restaurantModel.js';

export const getAllRestaurants = async (req, res) => {
  try {
    const { location, cuisine, minRating } = req.query;

    const filters = {};
    if (location) filters.location = location;
    if (cuisine) filters.cuisine = cuisine;
    if (minRating) filters.rating = { $gte: parseFloat(minRating) };

    const restaurants = await Restaurant.findAll({
      where: filters
    });

    res.json(restaurants);
  } catch (err) {
    console.error('Error fetching restaurants:', err);
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
};

export const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findByPk(id);

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    res.json(restaurant);
  } catch (err) {
    console.error('Error fetching restaurant by ID:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
