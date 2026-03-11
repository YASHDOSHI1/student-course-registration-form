const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

// Enroll student
router.post('/', async (req, res) => {
  try {
    const enrollment = new Enrollment(req.body);
    await enrollment.save();
    res.json({ message: 'Enrollment successful' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get enrollments by student
router.get('/:studentId', async (req, res) => {
  const enrollments = await Enrollment.find({ studentId: req.params.studentId }).populate('courseId');
  res.json(enrollments);
});

module.exports = router;
