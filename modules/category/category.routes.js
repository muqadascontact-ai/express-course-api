const express = require('express');
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} = require('./category.controller');
const { categoryValidation } = require('./category.validation');
const validate = require('../../middlewares/validateMiddleware');
const { protect } = require('../../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getCategories)
  .post(protect, categoryValidation, validate, createCategory);

router.route('/:id')
  .get(getCategoryById)
  .put(protect, categoryValidation, validate, updateCategory)
  .delete(protect, deleteCategory);

module.exports = router;