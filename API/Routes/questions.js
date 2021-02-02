const express = require('express');
const router = express.Router();

const { 
    getAllQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion 
    } = require('./Controllers/questions');

router.get('/', getAllQuestions);
router.post('/', createQuestion);
router.patch('/:questionID', updateQuestion);
router.delete('/:questionID', deleteQuestion);

module.exports = router;