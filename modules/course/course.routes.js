const express = require('express');
const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} = require('./course.controller');
const { courseValidation } = require('./course.validation');
const validate = require('../../middlewares/validateMiddleware');
const { protect } = require('../../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getCourses)
  .post(protect, courseValidation, validate, createCourse);

router.route('/:id')
  .get(getCourseById)
  .put(protect, courseValidation, validate, updateCourse)
  .delete(protect, deleteCourse);

module.exports = router;