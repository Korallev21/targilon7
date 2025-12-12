let idCounter = 0
const articles = []

const getAllArticles = () => articles

const getArticle = (id) => articles.find(a => a.id === id)

const createArticle = (title, content) => {
    const newArticle = { id: ++idCounter, title, content }
    articles.push(newArticle)
    return newArticle
}

module.exports = {
    getAllArticles,
    getArticle,
    createArticle
}