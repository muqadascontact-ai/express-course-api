const { body } = require('express-validator');

const courseValidation = [
  body('title').trim().notEmpty().withMessage('Course title is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('price').isNumeric().withMessage('Price must be a valid number'),
  body('category').notEmpty().withMessage('Category ID is required')
];

module.exports = { courseValidation };