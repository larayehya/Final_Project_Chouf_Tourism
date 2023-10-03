const db = require("../database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// to keep the user logged in

exports.signup = async (req, res) => {
  const { firstName, lastName, password, email } = req.body;
  const hashedPassword = bcrypt.hashSync(password);
  const username = firstName + " " + lastName;
  try {
    const [response] = await db.query(
      "INSERT INTO Users (Username, Email, PasswordHash) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );
    if (response.affectedRows === 1)
      res.json({ success: true, message: "Registered successfully!" });
  } catch (error) {
    console.error("Registration Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [users] = await db.execute("select * from Users where Email = ?", [
      email,
    ]);
    const user = users[0];
    if (!user) return res.status(404).json({ message: "user not found" });

    const isPasswordValid = await bcrypt.compare(password, user.PasswordHash);
    if (!isPasswordValid)
      return res.status(401).json({ message: "incorrect password" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 86400,
    });

    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
