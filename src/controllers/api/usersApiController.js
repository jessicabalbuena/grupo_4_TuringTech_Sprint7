const path = require("path")
const db = require("../../database/models")
const sequelize = db.sequelize

let usersApiController = {
    listar: (req,res) => {
        db.User.findAll().then(users => res.json(users))
    }
}

module.exports = usersApiController