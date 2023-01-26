const { Sequelize } = require('sequelize');
const sequelize = require('../Config/DatabaseConfig');
const Clients = require("./ClientModel");

const NutritionHistory = sequelize.define('NutritionHistory',{
    NutritionHistoryID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ClientID:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'Client',
            key: 'ClientID'
        }
    },
    Date:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    CaloriesHit:{
        type: sequelize.BOOLEAN,
        allowNull: false
    }
},{
    tableName: 'Goals',
    timestamps: false,
    createdAt: false,
    updatedAt: false
})
NutritionHistory.belongsTo(Clients,{foreignKey: 'ClientID'});
Clients.hasMany(NutritionHistory,{foreignKey: 'ClientID'})
module.exports = NutritionHistory;