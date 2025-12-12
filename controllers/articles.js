const articles = require('../models/articles')
const getArticle = (req, res) => {
    const id = 1
    res.json(articles.getArticle(id) )
}

module.exports = { getArticle }