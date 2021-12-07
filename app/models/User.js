const Sequelize = require("sequelize")
const sequelize = require("../database/connection")
// const sequelize = require("../database/connection")

module.exports = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: sequelize.STRING(35),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(20),
        allowNull:false
    }
})