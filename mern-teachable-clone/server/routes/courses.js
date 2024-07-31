// routes/courses.js
const express = require('express');
const { getCourses, getCourse, createCourse } = require('../Controller/courseController');
const router = express.Router();

router.get('/', getCourses);
router.get('/:courseId', getCourse);
router.post('/', createCourse);

module.exports = router;





// const express = require('express');
// const Course = require('../models/Course');
// const User = require('../models/User');
// const router = express.Router();

// // Create a course (for instructors/admins)
// router.post('/', async (req, res) => {
//   try {
//     const { title, description, category, videos, instructor } = req.body;
//     const course = new Course({ title, description, category, videos, instructor });
//     await course.save();
//     res.status(201).json(course);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get all courses
// router.get('/', async (req, res) => {
//   try {
//     const courses = await Course.find().populate('instructor');
//     res.json(courses);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Enroll in a course (for students)
// router.post('/:courseId/enroll', async (req, res) => {
//   try {
//     const { courseId } = req.params;
//     const userId = req.user.id; // Assuming user ID is added to req.user after authentication
//     const course = await Course.findById(courseId);
//     if (!course) {
//       return res.status(404).json({ error: 'Course not found' });
//     }
//     course.enrolledStudents.push(userId);
//     await course.save();
//     res.json({ message: 'Enrolled successfully' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// module.exports = router;



















// const express = require('express');
// const Course = require('../models/Course');

// const router = express.Router();

// // Create Course
// router.post('/', async (req, res) => {
//   try {
//     const course = new Course(req.body);
//     await course.save();
//     res.status(201).json(course);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Get All Courses
// router.get('/', async (req, res) => {
//   try {
//     const courses = await Course.find().populate('instructor');
//     res.json(courses);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id);
//     if (!course) return res.status(404).json({ message: 'Course not found' });
//     res.json(course);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;

