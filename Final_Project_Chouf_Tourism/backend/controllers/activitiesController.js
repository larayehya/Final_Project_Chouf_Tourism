const db = require("../database");
exports.getAllActivities = async (req, res) => {
  try {
    const [activities] = await db.execute("SELECT * FROM Activities"); //destructuring
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};

exports.getActivity = async (req, res) => {
  try {
    const activityId = req.params.activityId;

    const [activities] = await db.execute(
      "SELECT * FROM Activities WHERE ActivityID = ?",
      [activityId]
    );

    if (activities.length === 0) {
      return res.status(404).json({ error: "Activity not found" });
    }

    res.status(200).json(activities[0]);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};
