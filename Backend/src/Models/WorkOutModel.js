const { Sequelize } = require('sequelize');
const sequelize = require('../Config/DatabaseConfig');
const Exercise = require('./ExerciseModel')

const WorkOut = sequelize.define("WorkOut",{
    WorkoutID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    ExerciseID:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'Exercise',
            key: 'ExerciseID'
        }
    }
},{
    tableName: 'WorkOut',
    timestamps: false,
    createdAt: false,
    updatedAt: false
});
WorkOut.hasMany(Exercise,{foreignKey:'ExerciseID'})
module.exports = WorkOut;