const db = require("../database");
exports.getAllLandmarks = async (req, res) => {
  try {
    const [landmarks] = await db.execute("SELECT * FROM Landmarks"); //destructuring
    res.status(200).json(landmarks);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};

exports.getLandmark = async (req, res) => {
  try {
    const landmarkId = req.params.landmarkId; // It extracts the restaurantId from the request parameters(mn l url).

    const [landmarks] = await db.execute(
      "SELECT * FROM Landmarks WHERE LandmarkID = ?",
      [landmarkId]
    ); // It queries the database to find a restaurant with the specified ID.

    if (landmarks.length === 0) {
      return res.status(404).json({ error: "Landmark not found" }); // If the restaurant id is not found, it returns a 404 Not Found response with an error message.
    }

    res.status(200).json(landmarks[0]);
    // If the restaurant is found, it responds with a JSON object containing the restaurant details.
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};
