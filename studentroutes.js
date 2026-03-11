const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Register
router.post('/register', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json({ message: 'Student registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const student = await Student.findOne({ email, password });
  if (student) {
    res.json({ message: 'Login successful', student });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
