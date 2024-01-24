
import express, { Router } from 'express';
import tokenController from '../controllers/tokenController';

const router: Router = express.Router();

router.use('/token', tokenController);

export default router;
