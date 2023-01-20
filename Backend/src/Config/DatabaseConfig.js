const { Sequelize } = require('sequelize');

const database = new Sequelize('TrainingGuru', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    port: '8889'
});


module.exports = database;

