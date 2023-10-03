const db = require("../database");
exports.getAllAccommodations = async (req, res) => {
  try {
    const [accommodations] = await db.execute("SELECT * FROM Accommodations");
    res.status(200).json(accommodations);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};

exports.getAccommodation = async (req, res) => {
  try {
    const accommodationId = req.params.accommodationId;

    const [accommodations] = await db.execute(
      "SELECT * FROM Accommodations WHERE AccommodationID = ?",
      [accommodationId]
    );

    if (accommodations.length === 0) {
      return res.status(404).json({ error: "Accommodation not found" });
    }

    res.status(200).json(accommodations[0]);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};
