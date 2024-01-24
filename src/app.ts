
import express from 'express';
import bodyParser from 'body-parser';
import UserModel from './models/userModel';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import sequelize from '../src/sequelize';
import  tokenController  from "../src/controllers/tokenController";

const app: express.Application = express();

app.use(bodyParser.json());

sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
});

app.use('/api', userRoutes);
app.use('/token', tokenController);

export default app;
