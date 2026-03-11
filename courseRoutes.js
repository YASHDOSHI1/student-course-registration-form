const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Get all courses
router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Add course
router.post('/', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.json({ message: 'Course added successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
