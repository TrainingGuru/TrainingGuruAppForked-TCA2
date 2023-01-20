import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('TrainingGuru', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
});

export default sequelize;

