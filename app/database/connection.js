const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    "socialnetwork", 
    "root", 
    "password", 
    { 
        host: '127.0.0.1', 
        dialect: 'mysql', 
        operatorsAliasses: false
    })
module.exports = sequelize
gkobal.sequelize = sequelize