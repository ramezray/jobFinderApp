const Sequelize = require('sequelize');
module.exports = new Sequelize('jobFinder_db', 'root', 'r2005moner', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});

