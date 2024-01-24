// src/routes/userRoutes.ts
import express, { Router } from 'express';
import userController from '../controllers/userController';

const router: Router = express.Router();

router.post('/users', userController);

export default router;
