const getArticle = (req, res) => {
    res.render('article.ejs',{ foo : {
        id : 1,
        title : 'My cake',
        author: 'John Doe',
        published: 'February 11, 2024',
        content: 'Lorem ipsum'
    }})
}

module.exports = { getArticle }