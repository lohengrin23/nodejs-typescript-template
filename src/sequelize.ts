import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test-db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;