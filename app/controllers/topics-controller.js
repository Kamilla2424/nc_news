const {fetchTopics} = require('../models/topics-model')

exports.getTopics = (req, res, next) => {
    fetchTopics().then(({rows}) => {
        res.status(200).send(rows)
    })
    .catch((err) => {
        next(err)
    })
}