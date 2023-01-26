const { Sequelize } = require('sequelize');
const sequelize = require('../Config/DatabaseConfig');
const Trainer = require("./TrainersModel");
const Workout = require("./WorkOutModel");

const TrainerWorkouts = sequelize.define("TrainerWorkouts",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    TrainerID:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'Trainer',
            key: 'TrainerID'
        }
    },
    WorkoutID:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'Workout',
            key: 'WorkoutID'
        }
    },
    WorkoutName: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},{
    tableName: 'TrainerWorkouts',
    timestamps: false,
    createdAt: false,
    updatedAt: false
});
TrainerWorkouts.belongsTo(Trainer,{foreignKey: 'TrainerID'})
TrainerWorkouts.hasMany(Workout,{foreignKey: 'WorkoutID'})
module.exports = TrainerWorkouts;