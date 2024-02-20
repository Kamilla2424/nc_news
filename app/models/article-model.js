const db = require('../../db/connection')

exports.fetchArticleById = (id) => {
    return db.query(`SELECT * FROM articles WHERE article_id = ${id}`)
    .then((response) => {
        if(response.rowCount === 0){
            return Promise.reject({status:404, msg:'id not found'})
        }
        return response.rows
    })
}