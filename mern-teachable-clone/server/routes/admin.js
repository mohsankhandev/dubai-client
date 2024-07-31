// server/routes/admin.js
const express = require('express');
const { getCourses, updateCourse, deleteCourse } = require('../controllers/AdminController');
const adminMiddleware = require('../middleware/adminMiddleware');
const router = express.Router();

router.use(adminMiddleware);

router.get('/courses', getCourses);
router.put('/course/:id', updateCourse);
router.delete('/course/:id', deleteCourse);

module.exports = router;
