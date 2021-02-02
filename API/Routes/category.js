const express = require('express');
const router = express.Router();

const { 
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
    } = require('./Controllers/Category');

router.get('/', getAllCategories);
router.post('/', createCategory);
router.patch('/:categoryID', updateCategory);
router.delete('/:categoryID', deleteCategory);

module.exports = router;