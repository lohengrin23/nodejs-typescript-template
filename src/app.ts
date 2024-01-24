// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import UserModel from './models/userModel';
import userRoutes from './routes/userRoutes';
import sequelize from '../src/sequelize';

const app: express.Application = express();

app.use(bodyParser.json());

// Sync Sequelize models with the database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
});

app.use('/api', userRoutes);

export default app;
