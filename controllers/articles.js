const getArticle = (req, res) => {
    res.render('article.ejs',{ foo : 42})
}

module.exports = { getArticle }