const express = require('express')
var app = express()

const articles = require ('../controllers/articles');
const router = require('./routes/articles');
app.use ('/', articles.getArticle);

module.exports = router