const express = require('express')
var router = express.Router()

const articles = require('../controllers/articles')
router.get('/', articles.getArticle);

module.exports = router