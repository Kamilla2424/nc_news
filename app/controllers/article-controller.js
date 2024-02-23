const { fetchArticleById, fetchArticlesArr, addVotes } = require("../models/article-model")

exports.getArticleById = (req, res, next) => {
    const {article_id} = req.params
    fetchArticleById(article_id).then((article) => {
        res.status(200).send({article: article})
    })
    .catch((err) => {
        next(err)
    })
}

exports.getArticles = (req, res, next) => {
    fetchArticlesArr().then((articles) => {
        res.status(200).send({articles: articles})
    })
    .catch((err) => {
        next(err)
    })
}

exports.addVotesById = (req, res, next) => {
    const {inc_votes} = req.body
    const {article_id} = req.params
    addVotes(article_id, inc_votes).then((article) => {
        res.status(200).send({article: article})
    })
    .catch((err) => {
        next(err)
    })
}