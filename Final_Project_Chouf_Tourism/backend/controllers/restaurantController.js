const db = require("../database");
exports.getAllRestaurants = async (req, res) => {
  try {
    const [restaurants] = await db.execute("SELECT * FROM Restaurants"); //destructuring
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};

exports.getRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId; 
    //It extracts the restaurantId from the request parameters(mn l url).

    const [restaurants] = await db.execute(
      "SELECT * FROM Restaurants WHERE RestaurantID = ?",
      [restaurantId]
    ); // btdwer bl database to find a restaurant with the specified ID.

    if (restaurants.length === 0) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    res.status(200).json(restaurants[0]);
    // If the restaurant is found, it responds with a JSON object containing the restaurant details.
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};
