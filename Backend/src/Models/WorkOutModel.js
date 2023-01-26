const { Sequelize } = require('sequelize');
const sequelize = require('../Config/DatabaseConfig');

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

module.exports = WorkOut;