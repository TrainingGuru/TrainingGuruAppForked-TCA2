// const { Sequelize } = require('sequelize');
// const sequelize = require('../Config/DatabaseConfig');
//
// const Client = sequelize.define('Client',{
//         ClientID:{
//             type: Sequelize.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true,
//         },
//         Name:{
//             type: Sequelize.STRING,
//             allowNull: false,
//         },
//         Email:{
//             type: Sequelize.STRING,
//             allowNull: false,
//         },
//         Password:{
//             type: Sequelize.STRING,
//             allowNull: false,
//         }
//     },
//     {
//         tableName: 'Client',
//         timestamps: false,
//         createdAt: false,
//         updatedAt: false
//     });
//
// module.exports = Client;