// controllers/courseController.js
const Course = require('../models/Course');

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
};

// Get a single course
exports.getCourse = async (req, res) => {
  const { courseId } = req.params;
  try {
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course', error });
  }
};

// Create a new course
exports.createCourse = async (req, res) => {
  const { title, description, price, category, videos, instructor , driveFolderId} = req.body;
  try {
    const course = new Course({ title, description, price, category, videos, instructor ,driveFolderId });
    await course.save();
    res.status(201).json({ message: 'Course created successfully', course });
  } catch (error) {
    res.status(500).json({ message: 'Error creating course', error });
  }
};
