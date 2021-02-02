const express = require('express');
const router = express.Router();

const { 
    getAllArticles,
    createArticle,
    updateArticle,
    deleteArticle 
    } = require('./Controllers/articles');

router.get('/', getAllArticles);
router.post('/', createArticle);
router.patch('/:articleID', updateArticle);
router.delete('/:articleID', deleteArticle);

module.exports = router;