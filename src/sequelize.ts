import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('digevo-token-v2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;