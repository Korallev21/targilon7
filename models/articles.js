const articles = [
    {
        id : 1,
        title : 'My cake',
        author: 'John Doe',
        published: 'February 11, 2024',
        content: 'Lorem ipsum'
    }
]

const getArticle = (id) => {
    return articles.filter((article) => article.id == id) [0]
}

module.exports = { getArticle }