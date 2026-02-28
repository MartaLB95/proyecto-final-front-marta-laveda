const express = require("express");
const router = express.Router();
const db = require("../db");

// POST /signup
router.post("/signup", async (req, res) => {
  const { name, villainName, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Verify if the email already exists
    const [existingUser] = await db.query(
      "SELECT * FROM screamford_users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Insert the new user into the database
    await db.query(
      "INSERT INTO screamford_users (name, villainName, email, password) VALUES (?, ?, ?, ?)",
      [name, villainName || null, email, password]
    );

    res.status(201).json({ message: "User created successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
  
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: "Missing fields" });

  try {
    const [rows] = await db.query(
      "SELECT * FROM screamford_users WHERE email = ? AND password = ?",
      [email, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user: rows[0] });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;